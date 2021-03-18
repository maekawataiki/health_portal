import express from "express";
import { CustomPlugin, ICustomPlugin } from "../models/customPlugin";

export function createCustomPlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const customPlugin = new CustomPlugin({
        author: userId,
        scripts: req.body.scripts
    });
    customPlugin.save().then(createdCustomPlugin => {
        res.status(201).json(createdCustomPlugin);
    }).catch(error => {
        res.status(500).json({
            message: `Creating a customPlugin failed! ${error}`
        });
    });
};

export function updateCustomPlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const customPlugin = new CustomPlugin({
        _id: req.body._id,
        author: req.body.author,
        scripts: req.body.scripts,
        title: req.body.title,
        description: req.body.description,
    });
    CustomPlugin.updateOne({ _id: req.body._id, author: userId }, customPlugin).then(result => {
        if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Couldn't udpate customPlugin!"
        });
    });
};

export function getCustomPlugins(req: express.Request, res: express.Response, next: express.NextFunction) {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    let customPluginQuery = CustomPlugin.find({ 'author': userId });
    let fetchedCustomPlugins: ICustomPlugin[];
    if (pageSize && currentPage) {
        customPluginQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    customPluginQuery
        .then(documents => {
            fetchedCustomPlugins = documents;
            return CustomPlugin.find().countDocuments();
        })
        .then(count => {
            res.status(200).json({
                message: "CustomPlugins fetched successfully!",
                customPlugins: fetchedCustomPlugins,
                maxCustomPlugins: count
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Fetching customPlugins failed!"
            });
        });
};

export function getCustomPlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    CustomPlugin.findOne({ _id: req.params.id, author: userId }).then(customPlugin => {
        if (customPlugin) {
            res.status(200).json(customPlugin);
        } else {
            res.status(404).json({ message: "CustomPlugin not found!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Fetching customPlugin failed!"
        });
    });
};

export function deleteCustomPlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    CustomPlugin.deleteOne({ _id: req.params.id, owner: userId }).then(result => {
        console.log(result);
        if (result.n && result.n > 0) {
            res.status(200).json({ message: "Deletion successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Deleting customPlugins failed!"
        });
    });
};