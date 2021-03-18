import express from "express";
import { createPlugin, updatePlugin, getPlugins, deletePlugin, getPlugin } from "../controllers/plugin";
import { checkAuth } from "../middleware/check-auth";

export const pluginRoutes = express.Router();

pluginRoutes.post("", checkAuth, createPlugin);

pluginRoutes.put("/:id", checkAuth, updatePlugin);

pluginRoutes.get("", getPlugins);

pluginRoutes.get("/:id", getPlugin);

pluginRoutes.delete("/:id", checkAuth, deletePlugin);