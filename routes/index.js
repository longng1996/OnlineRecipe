const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {//using .get method to get the root of the application. request n response parameters
    res.render('index')         //sending default response, instead of simplying sending text, render the file index.ejs

})  


module.exports = router         //exporting router, so can be used in other files if when needed