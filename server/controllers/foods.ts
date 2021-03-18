import express from "express";
import { Food, IFood } from "../models/food";
import { elasticClient } from "../middleware/elastic"
import mongoose from "mongoose";

export function createFood(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const post = new Food({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: "Post added successfully",
            post: {
                ...createdPost,
                id: createdPost._id
            }
        });
    }).catch(error => {
        res.status(500).json({
            message: `Creating a post failed! ${error}`
        });
    });
};

export function updateFood(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const post = new Food({
        _id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });
    Food.updateOne({ _id: req.params.id }, post).then(result => {
        if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Couldn't udpate post!"
        });
    });
};

export function getFoods(req: express.Request, res: express.Response, next: express.NextFunction) {
    const keyword = req.body.keyword || "";
    const postQuery = Food.find({ $text: { $search: keyword } })
        .select({ "score": { "$meta": "textScore" } })
        .sort({ "score": { "$meta": "textScore" } })
        .limit(5);
    postQuery
        .then(documents => {
            res.status(200).json({
                message: "Posts fetched successfully!",
                posts: documents
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({
                message: "Fetching posts failed!"
            });
        });
};

export function getFood(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Food.findById(req.params.id).then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Post not found!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Fetching post failed!"
        });
    });
};

export function deleteFood(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Food.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        if (result.n && result.n > 0) {
            res.status(200).json({ message: "Deletion successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Deleting posts failed!"
        });
    });
};

export function getSuggestions(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const keyword = req.query.keyword || "";
    elasticClient.search({
        index: "foods",
        body: {
            query: {
                match: {
                    Tagnames: keyword
                }
            }
        }
    }).then(result => {
        res.status(200).json({
            message: "Foods fetched successfully!",
            posts: result.body.hits.hits
        });
    }).catch(error => {
        res.status(500).json({
            message: `Search Failed! ${error}`
        });
    });
}