import { Router } from "express";
import {
  getQuery,
  
  /*getProjectTasks,*/
} from "../controllers/query.controller.js";

const router = Router();

// Routes

router.post("/", getQuery);


// router.get("/:id/tasks", getProjectTasks);

export default router;
