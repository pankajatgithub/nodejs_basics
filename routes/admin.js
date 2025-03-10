const path = require('path');
const express = require("express");
const router = express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("In another middleware");
    res.sendFile(path.join(__dirname,'../','views','add-product.html')); //__dirname is global path to node js folder,'../'is one level up,views is folder name, add-product is file name to load in this path
});

router.post("/add-product",(req,res,next)=>{
 console.log(req.body);
 
    res.redirect("/");
    });


module.exports = router;