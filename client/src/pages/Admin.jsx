import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Admin = () => {
  const [forms, setForms] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [remarkInput, setRemarkInput] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmRemarkClearId, setConfirmRemarkClearId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchForms();
  }, []);

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

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Company Enquiries", 14, 10);
    const tableData = forms.map((entry, i) => [
      i + 1,
      entry.companyName,
      entry.hrName,
      entry.hrSpocName,
      entry.mobile,
      entry.email,
      entry.state,
      entry.district,
      entry.city,
      entry.sector,
      entry.usingWellness,
      entry.employeeCount,
    ]);

    doc.autoTable({
      head: [["#", "Company", "HR Name", "HR SPOC", "Phone", "Email", "State", "District", "City", "Sector", "Using Wellness", "Employees"]],
      body: tableData,
      startY: 20,
      styles: { fontSize: 8 }
    });
    doc.save("company-enquiries.pdf");
  };

  const downloadExcel = () => {
    const worksheetData = forms.map((entry, i) => ({
      "S.No": i + 1,
      "Company": entry.companyName,
      "HR Name": entry.hrName,
      "HR SPOC": entry.hrSpocName,
      "Phone": entry.mobile,
      "Email": entry.email,
      "State": entry.state,
      "District": entry.district,
      "City": entry.city,
      "Sector": entry.sector,
      "Using Wellness": entry.usingWellness,
      "Employees": entry.employeeCount,
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
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border border-gray-200 rounded-xl px-6 py-4 mb-6 flex flex-col md:flex-row justify-between items-center shadow gap-4">
        <h1 className="text-3xl font-bold text-teal-600 text-center md:text-left">Admin Dashboard</h1>
        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={downloadPDF} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full shadow">PDF</button>
          <button onClick={downloadExcel} className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full shadow">Excel</button>
          <button onClick={handleLogout} className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-full shadow">Logout</button>
        </div>
      </div>

      <div className="overflow-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-green-500 to-teal-600 text-white shadow text-left">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Company Info</th>
              <th className="px-4 py-3">Contact</th>
              {/* <th className="px-4 py-3">Expecting Features</th> */}
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Remarks</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {forms.length === 0 && (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                  No entries found
                </td>
              </tr>
            )}
            {forms.map((entry, i) => (
              <tr key={i} className="hover:bg-teal-50 transition-all duration-300 group">
                <td className="px-4 py-3 font-semibold text-gray-600">{i + 1}</td>
                <td className="px-4 py-3 space-y-1">
                  <div className="font-semibold text-gray-800">Company Name: {entry.companyName}</div>
                  {/* <div className="font-semibold text-gray-600">Sector: {entry.sector}</div> */}
                  <div className="font-semibold text-gray-600">Employees: {entry.employeeCount}</div>
                </td>
                <td className="px-4 py-3 space-y-1">
                  <div className="font-semibold text-gray-600">HR: {entry.hrSpocName}</div>
                  <div className="font-semibold text-gray-600">Email: {entry.email}</div>
                  <div className="font-semibold text-gray-600">Mobile: {entry.mobile}</div>
                  <div className="font-semibold text-gray-600">State: {entry.state}</div>
                  <div className="font-semibold text-gray-600">District: {entry.district}</div>
                  <div className="font-semibold text-gray-600">City: {entry.city}</div>
                </td>
                {/* <td className='px-4 py-3 space-y-1'>
                  <div className="font-semibold text-gray-600">Wellness: {entry.usingWellness ? "Yes" : "No"}</div>
                  <div className="font-semibold text-gray-600">Features: {entry.expectedFeatures || "N/A"}</div>
                  <div className="font-semibold text-gray-600">Anything Else: {entry.anythingElse || "N/A"}</div>
                </td> */}
                <td className="px-4 py-3 text-left">
                  <div className="space-y-2">
                    {["statusEmail", "statusWhatsapp", "statusPhone"].map((field, idx) => (
                      <div key={idx}>
                        <label className="block text-sm font-medium text-gray-600 mb-1">{field.replace("status", "")}</label>
                        <select
                          defaultValue={entry[field] || "Pending"}
                          onChange={(e) => updateFormField(entry._id, field, e.target.value)}
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
            ))}
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
            <h3 className="text-lg font-semibold text-red-600 mb-4">Delete this entry?</h3>
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
            <h3 className="text-lg font-semibold text-red-600 mb-4">Clear this remark?</h3>
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