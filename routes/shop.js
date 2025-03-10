const path = require("path");//to get path in node js folder, as ordinaly absolute path will not work here
const express = require('express');

const router = express.Router();

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html')); //send to shop.html file if "/" address is called, __dirname is global variable to access root folder of app.js
    });

module.exports = router;