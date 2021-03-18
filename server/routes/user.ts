import express from "express";
import { createUser, userLogin } from "../controllers/user";

export const userRoutes = express.Router();

userRoutes.post("/signup", createUser);
userRoutes.post("/login", userLogin);