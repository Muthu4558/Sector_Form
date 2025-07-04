import CompanyForm from "../models/CompanyForm.js";

// Submit
export const submitCompanyForm = async (req, res) => {
  try {
    const form = new CompanyForm(req.body);
    await form.save();
    res.status(201).json({ message: "Company form submitted", form });
  } catch (err) {
    res.status(500).json({ message: "Submit failed", error: err.message });
  }
};

// Get All
export const getAllCompanyForms = async (_req, res) => {
  try {
    const forms = await CompanyForm.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

// Update
export const updateCompanyForm = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await CompanyForm.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// Delete
export const deleteCompanyForm = async (req, res) => {
  try {
    await CompanyForm.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Form deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
