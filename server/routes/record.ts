import express from "express";
import { createRecord, updateRecord, getRecords, deleteRecord, getRecord } from "../controllers/record";
import { checkAuth } from "../middleware/check-auth";

export const recordRoutes = express.Router();

recordRoutes.post("", checkAuth, createRecord);

recordRoutes.put("/:date", checkAuth, updateRecord);

recordRoutes.get("", checkAuth, getRecords);

recordRoutes.get("/:date", checkAuth, getRecord);

recordRoutes.delete("/:date", checkAuth, deleteRecord);