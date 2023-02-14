import { NextFunction, Request, Response, Router } from "express";

export const logs = Router();

logs.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.originalUrl);
    next();
});