import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Admin = () => {
  const [forms, setForms] = useState([]);
  const [filteredForms, setFilteredForms] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [remarkInput, setRemarkInput] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmRemarkClearId, setConfirmRemarkClearId] = useState(null);
  const [sectorFilter, setSectorFilter] = useState('All');
  const navigate = useNavigate();

  // Fetch all entries on mount
  useEffect(() => {
    fetchForms();
  }, []);

  // Re-filter whenever forms or the selected sector changes
  useEffect(() => {
    if (sectorFilter === 'All') {
      setFilteredForms(forms);
    } else {
      setFilteredForms(forms.filter(form => form.sector === sectorFilter));
    }
  }, [sectorFilter, forms]);

  const fetchForms = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/company/all`);
      const data = await res.json();
      setForms(data);
    } catch (err) {
      toast.error("Error loading submissions");
      console.error(err);
    }
  };

  const updateFormField = async (id, field, value) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/company/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value })
      });
      const updated = await res.json();
      setForms(forms.map(f => f._id === id ? updated : f));
      toast.success(`${field} updated`);
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const deleteForm = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/company/delete/${id}`, {
        method: "DELETE"
      });
      setForms(forms.filter(f => f._id !== id));
      toast.success("Entry deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success("Logged out");
    navigate('/');
  };

  // Download PDF of filtered entries
  const downloadPDF = () => {
    if (filteredForms.length === 0) {
      toast.error("No data to export");
      return;
    }

    const doc = new jsPDF();
    doc.text("Company Enquiries", 14, 10);

    const tableData = filteredForms.map((entry, i) => [
      i + 1,
      entry.sector,
      entry.companyName,
      entry.employeeCount,
      entry.hrSpocName,
      entry.mobile,
      entry.email,
      entry.state,
      entry.district,
      entry.city,
    ]);

    autoTable(doc, {
      head: [["#", "Sector", "Company", "Employees", "HR SPOC", "Phone", "Email", "State", "District", "City"]],
      body: tableData,
      startY: 20,
      styles: { fontSize: 8 }
    });

    doc.save("company-enquiries.pdf");
  };

  // Download Excel of filtered entries
  const downloadExcel = () => {
    const worksheetData = filteredForms.map((entry, i) => ({
      "S.No": i + 1,
      "Sector": entry.sector,
      "Company": entry.companyName,
      "Employees": entry.employeeCount,
      // "HR Name": entry.hrName,
      "HR SPOC": entry.hrSpocName,
      "Phone": entry.mobile,
      "Email": entry.email,
      "State": entry.state,
      "District": entry.district,
      "City": entry.city,
      // "Using Wellness": entry.usingWellness,
    }));

    const ws = XLSX.utils.json_to_sheet(worksheetData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Company Enquiries");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(dataBlob, "company-enquiries.xlsx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-green-50 to-teal-100 p-6">
      {/* Header with filter + actions */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border border-gray-200 rounded-xl px-6 py-4 mb-6 flex flex-col md:flex-row justify-between items-center shadow gap-4">
        <h1 className="text-3xl font-bold text-teal-600 text-center md:text-left">
          Admin Dashboard
        </h1>

        <div className="flex gap-3 flex-wrap justify-center">
          {/* Sector Filter */}
          <select
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
            className="px-4 py-2 rounded-full border-teal-400 outline-none text-teal-700 shadow bg-white hover:bg-teal-50 transition-colors"
          >
            <option value="All">All Sectors</option>
            <option value="Cement">Cement</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Food processing">Food processing</option>
            <option value="Steel">Steel</option>
            <option value="Pharma">Pharma</option>
            <option value="Hotel">Hotel</option>
            <option value="IT">IT</option>
            <option value="Banks">Banks</option>
            <option value="Airline">Airline</option>
            <option value="Leather Industry">Leather Industry</option>
            <option value="Heavy industry">Heavy industry</option>
            <option value="Cottage">Cottage</option>
            <option value="Chemical">Chemical</option>
            <option value="Mining">Mining</option>
            <option value="Textile">Textile</option>
            <option value="Automobile">Automobile</option>
            <option value="ITES">ITES</option>
            <option value="Aerospace & Defense">Aerospace & Defense</option>
            <option value="Metals">Metals</option>
            <option value="Petroleum Industry">Petroleum Industry</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Ports, Shipping & Maritime">Ports, Shipping & Maritime</option>
            <option value="Water Treatment & Sanitation Services">Water Treatment & Sanitation Services</option>
            <option value="Dairy & Livestock Industry">Dairy & Livestock Industry</option>
            <option value="Tourism & Travel">Tourism & Travel</option>
            <option value="Paper">Paper</option>
            <option value="Real Estate Tech">Real Estate Tech</option>
            <option value="Sports Industry">Sports Industry</option>
          </select>

          <button
            onClick={downloadPDF}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full shadow"
          >
            PDF
          </button>
          <button
            onClick={downloadExcel}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full shadow"
          >
            Excel
          </button>
          <button
            onClick={handleLogout}
            className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-full shadow"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-green-500 to-teal-600 text-white shadow text-left">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Sector</th>
              <th className="px-4 py-3">Company Info</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Remarks</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredForms.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                  No entries found
                </td>
              </tr>
            ) : (
              filteredForms.map((entry, i) => (
                <tr key={entry._id} className="hover:bg-teal-50 transition-all duration-300 group">
                  <td className="px-4 py-3 font-semibold text-gray-600">{i + 1}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-teal-600">{entry.sector}</div>
                  </td>
                  <td className="px-4 py-3 space-y-1">
                    <div className="font-semibold text-gray-800">
                      {entry.companyName}
                    </div>
                    <div className="font-semibold text-gray-600">
                      {entry.employeeCount}
                    </div>
                  </td>
                  <td className="px-4 py-3 space-y-1">
                    <div className="font-semibold text-gray-600">{entry.hrSpocName}</div>
                    <div className="font-semibold text-gray-600">{entry.email}</div>
                    <div className="font-semibold text-gray-600">{entry.mobile}</div>
                    <div className="font-semibold text-gray-600">{entry.state}</div>
                    <div className="font-semibold text-gray-600">{entry.district}</div>
                    <div className="font-semibold text-gray-600">{entry.city}</div>
                  </td>
                  <td className="px-4 py-3 text-left">
                    <div className="space-y-2">
                      {["statusEmail", "statusWhatsapp", "statusPhone"].map((field, idx) => (
                        <div key={idx}>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            {field.replace("status", "")}
                          </label>
                          <select
                            defaultValue={entry[field] || "Pending"}
                            onChange={(e) =>
                              updateFormField(entry._id, field, e.target.value)
                            }
                            className={`w-full px-3 py-1 rounded-md text-sm font-semibold focus:outline-none border ${entry[field] === "Pending"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                              : entry[field] === "Completed"
                                ? "bg-green-100 text-green-700 border-green-300"
                                : "bg-blue-100 text-blue-700 border-blue-300"
                              }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Follow-up">Follow-up</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {entry.remark ? (
                      <div className="space-y-2">
                        <p className="text-gray-800">{entry.remark}</p>
                        <button
                          onClick={() => setConfirmRemarkClearId(entry._id)}
                          className="text-red-500 text-xs hover:underline"
                        >
                          <MdDelete className="inline-block mr-1 text-2xl" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 italic">No remarks</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-4 text-xl">
                      <button
                        onClick={() => {
                          setEditIndex(i);
                          setRemarkInput(entry.remark || '');
                        }}
                        className="text-blue-600 hover:text-blue-800 transition"
                        title="Edit"
                      >
                        <TiEdit className="text-3xl" />
                      </button>
                      <button
                        onClick={() => setConfirmDeleteId(entry._id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <MdDelete className="text-3xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Remark Modal */}
      {editIndex !== null && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-teal-700">Edit Remark</h2>
            <textarea
              rows="4"
              value={remarkInput}
              onChange={(e) => setRemarkInput(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Enter your remark here..."
            />
            <div className="flex justify-end mt-4 gap-3">
              <button
                onClick={() => {
                  updateFormField(forms[editIndex]._id, "remark", remarkInput);
                  setEditIndex(null);
                  setRemarkInput('');
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditIndex(null);
                  setRemarkInput('');
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              Delete this entry?
            </h3>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  deleteForm(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Clear Remark Modal */}
      {confirmRemarkClearId && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              Clear this remark?
            </h3>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  updateFormField(confirmRemarkClearId, "remark", "");
                  setConfirmRemarkClearId(null);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Clear
              </button>
              <button
                onClick={() => setConfirmRemarkClearId(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;