import { cpus, totalmem, freemem, networkInterfaces } from 'os';
import { Request, Response, Router } from "express";

export const resources = Router();

/* cpu */
resources.get("/cpu/all", (req: Request, res: Response) => {
    res.status(200).json(cpus());
});

/* memoria */
resources.get("/memoria", (req: Request, res: Response) => {
    res.status(200).json({
        total: totalmem(),
        free: freemem(),
    });
});

/* interface */
resources.get("/interfaces/all", (req: Request, res: Response) => {
    res.status(200).json(networkInterfaces());
});