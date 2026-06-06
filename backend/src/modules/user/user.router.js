import { Router } from "express";
import { userInfos } from "./user.controller.js";
import { requireAuth } from "../../middlewares/auth.middlewares.js";

const router = Router()

router.get('/me', requireAuth, userInfos)

export default router