var express = require('express');
var router = express.Router();

router.get('/', function (req, res,next) {
    console.log("Hit First Route")
    // res.send("hi")
    next()
})

router.get('/', function (req, res,next) {
    console.log("Hit Second Route");
    res.send("Hello World!")
})


module.exports = router;