import { Router } from "express";
import { newProject, getProject } from "./project.controller.js";
import { requireAuth } from "../../middlewares/auth.middlewares.js";

const router = Router();

router.post('/new', requireAuth, newProject);
router.get('/:id', requireAuth, getProject);

export default router;