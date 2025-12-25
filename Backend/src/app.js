import dotenv from "dotenv";
dotenv.config("../.env");
import express from "express";
import {createServer} from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import {ConnectToSocket} from "./controllers/socketManager.js";
import User from "./routes/User.js";
import cors from 'cors';

const app=express();
app.use(
  cors({
    origin: "https://videoconnect-frontend.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
const server=createServer(app);
const io=ConnectToSocket(server);
app.set("port",(process.env.PORT || 8080));
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));


// Routes
app.get("/",(req,res)=>{
    res.send("Welcome ViConnect");
})

app.use("/user",User);

const start = async()=>{
   await mongoose.connect(process.env.MONGO_URL).then(
    console.log("DB is Connected. ")).catch((err)=>{console.log(err)})
   server.listen(app.get("port"),()=>{
    console.log("ViConnect Listing on- ",`${app.get("port")}`);
   });
}

start();