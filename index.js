const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog")
app.use("/api/v1",blog);



app.listen(process.env.PORT,()=>{
    console.log("app is starts at port no " + process.env.PORT)
})

const dbconnect = require("./config/database")
dbconnect();