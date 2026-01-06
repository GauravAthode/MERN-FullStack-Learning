import dotenv from 'dotenv'
dotenv.config();
import express from 'express'

const app=express();

app.get("/",(req,res)=>{
    console.log("server is Running");
    res.json({message:"server is running sucessfully"});
})

const port=process.env.PORT||5000;
app.listen(port,()=>{
    console.log("server started t port",port);
})