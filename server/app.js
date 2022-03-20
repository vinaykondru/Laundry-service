const express = require("express");
const mongoose = require('mongoose');
const DB = "mongodb+srv://vineet:group10@cluster0.f3mfx.mongodb.net/laundry?retryWrites=true&w=majority";


mongoose.connect(DB).then(() => {
    console.log("connection successfull")
}).catch((err) => console.log("no connection"))
const app = express();
app.get ("/",(req,res) =>{
    res.send("hi")
    
})
app.listen(3000, () => console.log("server is started")); 