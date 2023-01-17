import { Router } from "express";
import {
  getArticulos,
  createArticulos,
  updateArticulos,
  getArticulo,
  deleteArticulo,
  /*getProjectTasks,*/
} from "../controllers/articulos.controller.js";

const router = Router();

// Routes
router.post("/", createArticulos);
router.get("/", getArticulos);
router.put("/:id", updateArticulos);
router.delete("/:id", deleteArticulo);
router.get("/:id", getArticulo);

// router.get("/:id/tasks", getProjectTasks);

export default router;
