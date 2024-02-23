const mongoose = require("mongoose")
require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DBURL)
    .then(()=>{console.log("database connected successfully")})
    .catch((error)=>{console.log("error occured at db connection")})
}

module.exports = dbconnect;
