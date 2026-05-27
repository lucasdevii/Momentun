import { Router } from "express";
import { profile } from "./user.controller";

const router = Router()

router.post('me', profile)