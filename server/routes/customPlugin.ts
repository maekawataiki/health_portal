import express from "express";
import { createCustomPlugin, updateCustomPlugin, getCustomPlugins, deleteCustomPlugin, getCustomPlugin } from "../controllers/customPlugin";
import { checkAuth } from "../middleware/check-auth";

export const customPluginRoutes = express.Router();

customPluginRoutes.post("", checkAuth, createCustomPlugin);

customPluginRoutes.put("/:id", checkAuth, updateCustomPlugin);

customPluginRoutes.get("", checkAuth, getCustomPlugins);

customPluginRoutes.get("/:id", checkAuth, getCustomPlugin);

customPluginRoutes.delete("/:id", checkAuth, deleteCustomPlugin);