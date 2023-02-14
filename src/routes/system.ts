import { uptime, arch, constants, machine, platform } from 'os';
import { Request, Response, Router } from "express";

export const system = Router();

/* uptime */
system.get("/uptime", (req: Request, res: Response) => {
    res.status(200).json(uptime());
});

/* arch */
system.get("/arch", (req: Request, res: Response) => {
    res.status(200).json(arch());
});

/* constants */
system.get("/constants", (req: Request, res: Response) => {
    res.status(200).json(constants);
});

/* machine */
system.get("/machine", (req: Request, res: Response) => {
    res.status(200).json(machine());
});

/* platform */
system.get("/platform", (req: Request, res: Response) => {
    res.status(200).json(platform());
});