import express from "express";
import {
  getPharmacies,
  getPharmacybyEmail,
  signUpPharmacy,
  signInPharmacy,
} from "../controllers/pharmacy.controller.js";

const router = express.Router();

router.get("/", getPharmacies);
router.get("/:email", getPharmacybyEmail);
router.post("/signup", signUpPharmacy);
router.post("/signin", signInPharmacy);

export default router;
