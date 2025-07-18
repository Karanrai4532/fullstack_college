const express = require("express")

const app = express();

app.get("/", (req,res)=>{
    // res.status(200).send("Welcome to server")
    res.status(200).send('<h1 style = "color:blue; background-color:yellow; width: 50%; margin:auto">Welcome to RB</h1>')
})
const data = require("./data.json");
const { connection } = require("mongoose");

app.get("/products",(req,res)=>{
    res.status(200).send(data);
})

app.get("/user", (req,res)=>{
    res.status(200).send("userdata")
})

const PORT = 8080;

app.listen(PORT , async()=>{
    try{
         console.log("database is connecting")
        await connection
        console.log("database is connected")
    }catch(error){
        console.log (error);
    }
    console.log(`server is running at http://localhost:${PORT}`);
})