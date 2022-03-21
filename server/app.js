const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan=require('morgan');
const cors=require('cors');
const jwt = require('jsonwebtoken');
const DB = "mongodb+srv://vineet:group10@cluster0.f3mfx.mongodb.net/laundry?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("connection successfull")
}).catch((err) => console.log("no connection"))
const app = express();

app.use(bodyParser.json());
app.use(cors());

const userRoutes= require('./routes/users');
const orderRoutes=require('./routes/orders');

app.use(morgan('dev'));       //--DELETE /orders/some123 200 14.376 ms - 47  
app.use("/",userRoutes);
app.use("/orders",orderRoutes);

app.use((req,res,next)=>{
    const error=new Error("Not found");  //our error
    error.status=404;
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message      //--not our error
        }
    });
});


app.listen(5000, () => console.log("server is started")); 