import { Router } from "express";
import {
  getRubros,
  createRubros,
  updateRubros,
  getRubro,
  deleteRubro,
  /*getProjectTasks,*/
} from "../controllers/rubros.controller.js";

const router = Router();

// Routes
router.post("/", createRubros);
router.get("/", getRubros);
router.put("/:id", updateRubros);
router.delete("/:id", deleteRubro);
router.get("/:id", getRubro);

// router.get("/:id/tasks", getProjectTasks);

export default router;
