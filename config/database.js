const mongoose = require('mongoose');
require("dotenv").config();

// const dburl = process.env.DBURL;


const dbconnect = ()=>{
    mongoose.connect( process.env.DBURL)
    .then(()=>{console.log("database connected successfully")})
    .catch((error)=>{
        console.log("error occured");
    })
}

module.exports = dbconnect;