import express from "express";
import { Plugin, IPlugin } from "../models/plugin";

export function createPlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const plugin = new Plugin({
        unique_id: req.body.unique_id,
        author: userId,
        title: req.body.title,
        description: req.body.description,
        main: req.body.main,
        setting: req.body.setting
    });
    Plugin.findOne({ unique_id: plugin.unique_id }).then(result => {
        if (result) throw "unique_id already exist";
        plugin.save().then(createdPlugin => {
            res.status(201).json(createdPlugin);
        })
    }).catch(error => {
        res.status(500).json({
            message: `Creating a plugin failed! ${error}`
        });
    });
};

export function updatePlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const plugin = new Plugin({
        _id: req.body.id,
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        main: req.body.main,
        setting: req.body.setting
    });
    Plugin.updateOne({ _id: req.params.id, author: userId }, plugin).then(result => {
        if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Couldn't udpate plugin!"
        });
    });
};

export function getPlugins(req: express.Request, res: express.Response, next: express.NextFunction) {
    const keyword = req.query.keyword;
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;

    let pluginQuery;
    if (keyword) {
        pluginQuery = Plugin.find({ "title": { "$regex": new RegExp(keyword, 'i') } })
    } else {
        pluginQuery = Plugin.find();
    }
    
    let fetchedPlugins: IPlugin[];
    if (pageSize && currentPage) {
        pluginQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    pluginQuery
        .then(documents => {
            fetchedPlugins = documents;
            return Plugin.find().countDocuments();
        })
        .then(count => {
            res.status(200).json({
                message: "Plugins fetched successfully!",
                plugins: fetchedPlugins,
                maxPlugins: count
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Fetching plugins failed!"
            });
        });
};

export function getPlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Plugin.findOne({ unique_id: req.params.id }).then(plugin => {
        if (plugin) {
            res.status(200).json(plugin);
        } else {
            res.status(404).json({ message: "Plugin not found!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Fetching plugin failed!"
        });
    });
};

export function deletePlugin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    Plugin.deleteOne({ _id: req.params.id, owner: userId }).then(result => {
        console.log(result);
        if (result.n && result.n > 0) {
            res.status(200).json({ message: "Deletion successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Deleting plugins failed!"
        });
    });
};