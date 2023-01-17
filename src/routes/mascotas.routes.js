import { Router } from "express";
import {
  getMascotas,
  createMascotas,
  updateMascotas,
  getMascota,
  deleteMascota,
  /*getProjectTasks,*/
} from "../controllers/mascotas.controller.js";

const router = Router();

// Routes
router.post("/", createMascotas);
router.get("/", getMascotas);
router.put("/:id", updateMascotas);
router.delete("/:id", deleteMascota);
router.get("/:id", getMascota);

// router.get("/:id/tasks", getProjectTasks);

export default router;
