import express from "express";
import { addPaymentMethod, getPaymentsByUser, deletePaymentMethod } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/", addPaymentMethod);
router.get("/:userId", getPaymentsByUser);
router.delete("/:id", deletePaymentMethod);

export default router;
