import { Router } from "express";
import {
  getReviews,
  createReviews,
  updateReviews,
  getReview,
  deleteReview,
  /*getProjectTasks,*/
} from "../controllers/reviews.controller.js";

const router = Router();

// Routes
router.post("/", createReviews);
router.get("/", getReviews);
router.put("/:id", updateReviews);
router.delete("/:id", deleteReview);
router.get("/:id", getReview);

// router.get("/:id/tasks", getProjectTasks);

export default router;
