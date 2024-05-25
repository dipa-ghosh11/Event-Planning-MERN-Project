import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from "dotenv";
import msgRouter from "./router/msgRouter.js"

const app=express();
dotenv.config({path: "./config/config.env"});

app.use(express.json()) //it will take data in json format
app.use(express.urlencoded({extended: true})); //it will check data is in string format or not

app.use("/api/v1/message", msgRouter)

dbConnection();

export default app; 