import express from "express";
import {
  submitCompanyForm,
  getAllCompanyForms,
  updateCompanyForm,
  deleteCompanyForm,
} from "../controllers/companyFormController.js";

const router = express.Router();

router.post("/submit", submitCompanyForm);
router.get("/all", getAllCompanyForms);
router.patch("/update/:id", updateCompanyForm);
router.delete("/delete/:id", deleteCompanyForm);

export default router;