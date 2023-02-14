require('dotenv').config();
import express from "express";
import { api } from "./api";

const server = express()
    .use("/api", api)
    .listen(process.env.PORT || 3000, () => {
        console.log("server up =>", server.address());
    });