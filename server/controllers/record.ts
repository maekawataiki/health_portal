import express from "express";
import { Record, IRecord } from "../models/record";

export function createRecord(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const record = new Record({
        owner: req.body.owner,
        date: req.body.date,
        data: req.body.data
    });
    record.save().then(createdRecord => {
        res.status(201).json(createRecord);
    }).catch(error => {
        res.status(500).json({
            message: `Creating a record failed! ${error}`
        });
    });
};

export function updateRecord(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const record = new Record({
        _id: req.body.id,
        owner: req.body.owner,
        date: req.body.date,
        data: req.body.data
    });
    Record.updateOne({ _id: req.params.id, owner: userId, date: record.date }, record).then(result => {
        if (result.n > 0) {
            res.status(200).json({ message: "Update successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Couldn't udpate record!"
        });
    });
};

export function getRecords(req: express.Request, res: express.Response, next: express.NextFunction) {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    const recordQuery = Record.find({ 'owner': userId });
    let fetchedRecords: IRecord[];
    if (pageSize && currentPage) {
        recordQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    recordQuery
        .then(documents => {
            fetchedRecords = documents;
            return Record.find({ 'owner': userId }).countDocuments();
        })
        .then(count => {
            res.status(200).json({
                message: "Records fetched successfully!",
                records: fetchedRecords,
                maxRecords: count
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching records failed!"
            });
        });
};

export function getRecord(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    Record.findOne({ owner: userId, date: req.params.date }).then(record => {
        if (record && record.owner == userId) {
            res.status(200).json(record);
        } else {
            req.body.owner = userId;
            req.body.date = req.params.date;
            req.body.data = {};
            createRecord(req, res, next);
            // res.status(404).json({ message: "Record not found!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Fetching record failed!"
        });
    });
};

export function deleteRecord(req: express.Request, res: express.Response, next: express.NextFunction): void {
    const userId: string = req.userData ? req.userData.userId : "anonymous";
    Record.deleteOne({ _id: req.params.id, owner: userId }).then(result => {
        console.log(result);
        if (result.n && result.n > 0) {
            res.status(200).json({ message: "Deletion successful!" });
        } else {
            res.status(401).json({ message: "Not authorized!" });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Deleting records failed!"
        });
    });
};