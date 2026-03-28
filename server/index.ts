import express from "express";

const app = express()
const PORT=500
app.listen(PORT)
app.get("/",async(req,res)=>{
    console.log("hello world")
})