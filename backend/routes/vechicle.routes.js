import express from "express";
import { addVehicle, getVehicles, deleteVehicle } from "../controllers/vehicleController.js";

const router = express.Router();

router.post("/", addVehicle);
router.get("/:userId", getVehicles);
router.delete("/:id", deleteVehicle);

export default router;
