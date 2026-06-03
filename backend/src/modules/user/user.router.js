import { Router } from "express";
import { userInfos } from "./user.controller.js";

const router = Router()

router.get('/me', userInfos)

export default router