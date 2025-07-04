import mongoose from "mongoose";

const companyFormSchema = new mongoose.Schema({
  companyName: String,
  hrName: String,
  hrSpocName: String,
  mobile: String,
  email: String,
  city: String,
  sector: String,
  usingWellness: String,
  employeeCount: String,
  expectedFeatures: String,
  anythingElse: String,
  remark: String,
  statusEmail: { type: String, default: "Pending" },
  statusWhatsapp: { type: String, default: "Pending" },
  statusPhone: { type: String, default: "Pending" },
}, { timestamps: true });

export default mongoose.model("CompanyForm", companyFormSchema);