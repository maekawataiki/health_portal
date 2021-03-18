import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import { config } from './config';
import { userRoutes } from "./routes/user";
import { foodsRoutes } from "./routes/food";
import { recordRoutes } from "./routes/record";
import { pluginRoutes } from "./routes/plugin";
import { settingRoutes } from './routes/setting';
import { customPluginRoutes } from './routes/customPlugin';

export const app = express();

// Connect to mongodb
mongoose
    .connect(
        `mongodb://${config.HOST}:${config.PORT}/${config.DB}`, { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/user", userRoutes);
app.use("/api/food", foodsRoutes);
app.use("/api/record", recordRoutes);
app.use("/api/plugin/public", pluginRoutes);
app.use("/api/plugin/custom", customPluginRoutes);
app.use("/api/setting", settingRoutes);

