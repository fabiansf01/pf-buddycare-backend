import { Router } from "express";
import {
  getCarritos,
  createCarritos,
  updateCarritos,
  getCarrito,
  deleteCarrito,
  /*getProjectTasks,*/
} from "../controllers/carrito.controller.js";

const router = Router();

// Routes
router.post("/", createCarritos);
router.get("/", getCarritos);
router.put("/:id", updateCarritos);
router.delete("/:id", deleteCarrito);
router.get("/:id", getCarrito);

// router.get("/:id/tasks", getProjectTasks);

export default router;
