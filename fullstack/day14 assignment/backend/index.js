// const express = require("express")

// const app = express();


const app = express()
showUserData(app)
updateUserData(app)
app.get("/", (req,res)=>{
    // res.status(200).send("Welcome to server")
     res.status(200).send('<h1 style = "color:blue; background-color:yellow; width: 50%; margin:auto">Welcome to RB</h1>')
})


// const PORT = 8080;

// app.listen(PORT ,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// })
// import express from "express"
// import {showUserData} from "./controllers/ShowUserData.js"
// import {updateUserData} from "./controllers/UpdateUserData.js"

// const app = express()
// showUserData(app)
// updateUserData(app)
  
// const PORT = 8080;

// app.listen(PORT,()=>{
//     console.log(`server id running at http://localhost:${PORT}`)
// })
import express from "express"
// const app = express()
import connection from "mongoose"
app.use(userRouter);
const PORT=8080;
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