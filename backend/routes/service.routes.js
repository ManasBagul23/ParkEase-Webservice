import express from "express";
import { addService, getServices, getServiceById, deleteService } from "../controllers/serviceController.js";

const router = express.Router();

router.post("/", addService);
router.get("/", getServices);
router.get("/:id", getServiceById);
router.delete("/:id", deleteService);

export default router;
