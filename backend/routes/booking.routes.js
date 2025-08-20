import express from "express";
import { createBooking, getBookingsByUser, updateBookingStatus, cancelBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:userId", getBookingsByUser);
router.put("/:id/status", updateBookingStatus);
router.delete("/:id", cancelBooking);

export default router;
