import { Router } from "express";
import {
  getCommerces,
  createCommerces,
  updateCommerces,
  getCommerce,
  deleteCommerce,
  /*getProjectTasks,*/
} from "../controllers/commerce.controller.js";

const router = Router();

// Routes
router.post("/", createCommerces);
router.get("/", getCommerces);
router.put("/:id", updateCommerces);
router.delete("/:id", deleteCommerce);
router.get("/:id", getCommerce);

// router.get("/:id/tasks", getProjectTasks);

export default router;
