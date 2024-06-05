import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from "dotenv";
import msgRouter from "./router/msgRouter.js"
import cors from 'cors';

const app=express();
dotenv.config({path: "./config/config.env"});


// connection between frontend and backend
app.use(
    cors(
//         {
//      origin: [process.env.FRONTEND_URL],
//      methods: ["POST"],
//      credentials: true,
        
//   }
    )
);

app.use(express.json()) //it will take data in json format
app.use(express.urlencoded({extended: true})); //it will check data is in string format or not

app.use("/api/v1/message", msgRouter)

dbConnection();

export default app; 


// {
//         origin: [process.env.FRONTEND_URL],
//         methods: ["POST"],
//         credentials: true,
        
//     }