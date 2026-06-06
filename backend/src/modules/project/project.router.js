import { Router } from "express";
import { newProject } from "./project.controller.js";
import { requireAuth } from "../../middlewares/auth.middlewares.js";

const router = Router();

router.post('/new', requireAuth, newProject);

export default router;