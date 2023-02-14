import { Router, json } from "express";
import { teste } from "./routes/teste";
import cors from 'cors';
import { logs } from "./middlewares/logs";
import { resources } from "./routes/resources";
import { system } from "./routes/system";

export const api = Router()
    .use(json())
    .use(cors())
    .use(logs)
    .use("/teste", teste)
    .use("/system", system)
    .use("/resources", resources)