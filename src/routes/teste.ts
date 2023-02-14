import { NextFunction, Request, Response, Router } from "express";
export const teste = Router();

teste.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ msg: 'teste ok!' });
});