const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://raikarang135:<karan2006>@cluster0.r1kqyir.mongodb.net/myfirstdb?retryWrites=true&w=majority&appName=Cluster0");

 module.exports={
    connection
 }