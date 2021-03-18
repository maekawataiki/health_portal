import express from "express";
import jwt from "jsonwebtoken";

export function checkAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const authorization: string | undefined = req.headers.authorization;
        if (!authorization) throw Error;
        const token = authorization.split(" ")[1];
        const decodedToken: any = jwt.verify(token, process.env.JWT_KEY || "ABC");
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        next();
    } catch (error) {
        res.status(401).json({ message: "You are not authenticated!" });
    }
};