const express = require("express");
const router = express.Router();

router.use("/add-product",(req,res,next)=>{
    console.log("In another middleware");
    res.send('<form action="/admin/product" method = "POST"><input type ="text" name ="title"></input><button type="submit">submit</button> </form>');
});

router.post("/product",(req,res,next)=>{
 console.log(req.body);
 
    res.redirect("/");
    });


module.exports = router;