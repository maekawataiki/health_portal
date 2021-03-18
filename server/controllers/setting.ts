import express from "express";
import { Setting, ISetting } from "../models/setting";

export function createSetting(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const setting = new Setting({
        owner: req.body.owner,
        data: req.body.data
    });
    setting.save().then(createdSetting => {
        res.status(201).json(createdSetting);
    }).catch(error => {
        res.status(500).json({
            message: `Creating a setting failed! ${error}`
        });
    });
};

export function updateSetting(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const setting = new Setting({
        _id: req.body._id,
        owner: req.body.owner,
        data: req.body.data
    });
    Setting.updateOne({ _id: req.body._id, owner: userId }, setting).then(result => {
        if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Couldn't udpate setting!"
        });
    });
};

export function getSetting(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    Setting.findOne({ owner: userId }).then(setting => {
        if (setting) {
            res.status(200).json(setting);
        } else {
            res.status(404).json({ message: "Setting not found!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Fetching setting failed!"
        });
    });
};