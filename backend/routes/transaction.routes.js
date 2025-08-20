import express from "express";
import { createTransaction, getTransactionsByUser, getTransactionById } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/", createTransaction);
router.get("/:userId", getTransactionsByUser);
router.get("/details/:id", getTransactionById);

export default router;
