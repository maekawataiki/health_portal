import express from "express";
import { updateSetting, getSetting } from "../controllers/setting";
import { checkAuth } from "../middleware/check-auth";

export const settingRoutes = express.Router();

settingRoutes.get("", checkAuth, getSetting);

settingRoutes.put("", checkAuth, updateSetting);
