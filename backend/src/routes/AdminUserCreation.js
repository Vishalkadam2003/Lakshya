import { createAdminUser } from "../controllers/AdminUserController.js";
import express from "express";
const router = express.Router();

router.post("/create-user", createAdminUser);

export default router;
