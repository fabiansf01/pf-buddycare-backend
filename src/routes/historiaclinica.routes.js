import { Router } from "express";
import {
  getHistoriaclinicas,
  createHistoriaclinicas,
  updateHistoriaclinicas,
  getHistoriaclinica,
  deleteHistoriaclinica,
  /*getProjectTasks,*/
} from "../controllers/historiaclinica.controller.js";

const router = Router();

// Routes
router.post("/", createHistoriaclinicas);
router.get("/", getHistoriaclinicas);
router.put("/:id", updateHistoriaclinicas);
router.delete("/:id", deleteHistoriaclinica);
router.get("/:id", getHistoriaclinica);

// router.get("/:id/tasks", getProjectTasks);

export default router;
