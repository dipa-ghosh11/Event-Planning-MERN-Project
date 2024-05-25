import mongoose from "mongoose";


export const dbConnection=() =>{
    mongoose
    .connect(process.env.MONGO_URI,{dbName: "Event_Planning_Msg",family:4}) //connection with mongodb 
    .then(()=>{
        console.log("Connected to database");
    }) //if connected then display this message
    .catch((err)=>{
        console.log("Some error is occured",err);
    }); //if connection disrupted then display this message
}

