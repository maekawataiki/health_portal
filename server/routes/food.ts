import express from "express";
import { createFood, updateFood, getFoods, getFood, deleteFood, getSuggestions } from "../controllers/foods";

const foodDataRoutes = express.Router();
foodDataRoutes.get("/", getFoods);
foodDataRoutes.get("/:id");

const foodsuggestRoutes = express.Router();
foodsuggestRoutes.get("/", getSuggestions);

export const foodsRoutes = express.Router();
foodsRoutes.use("/data", foodDataRoutes);
foodsRoutes.use("/suggest", foodsuggestRoutes);