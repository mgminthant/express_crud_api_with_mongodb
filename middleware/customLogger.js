function customLogger(req, res, next) {
    console.log("Hello This is Custom Logger!");
    next();
}

module.exports = customLogger;