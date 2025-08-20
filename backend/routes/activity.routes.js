import express from "express";
import { logActivity, getActivitiesByUser, deleteActivity } from "../controllers/activityController.js";

const router = express.Router();

router.post("/", logActivity);
router.get("/:userId", getActivitiesByUser);
router.delete("/:id", deleteActivity);

export default router;
