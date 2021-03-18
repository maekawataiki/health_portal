import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/user";
import { createSetting } from './setting';

export function createUser(req: express.Request, res: express.Response, next: express.NextFunction): void {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save().then(result => {
            req.body.owner = result.id;
            req.body.data = { email: result.email };
            createSetting(req, res, next);
            res.status(201).json({
                message: "User created!",
                result: result
            });
        }).catch(err => {
            res.status(500).json({
                message: "Invalid authentication credentials!"
            });
        });
    });
}

export function userLogin(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let fetchedUser: IUser;
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return !!res.status(401).json({
                message: "Auth failed"
            });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        if (!result) {
            return res.status(401).json({
                message: "Auth failed"
            });
        }
        const token = jwt.sign(
            { email: fetchedUser.email, userId: fetchedUser._id },
            process.env.JWT_KEY || "ABC",
            { expiresIn: "3h" }
        );
        res.status(200).json({
            token: token,
            expiresIn: 10800,
            userId: fetchedUser._id
        });
    }).catch(err => {
        console.log(err);
        return res.status(401).json({
            message: "Invalid authentication credentials!"
        });
    });
}
