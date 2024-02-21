const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("./routes/route")
app.use("/api/v1",todoRoutes);

app.listen(port,()=>{
    console.log("server started successfully");
})

const dbconnect = require('./config/database');
dbconnect();

app.get('/',(req,res)=>{
    res.send("This is homepage baby")
})