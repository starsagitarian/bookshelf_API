const router = require("express").Router();
const authorsRoute = require("./authors");
const titlesRoute = require("./titles");
const formatsRoute = require("./formats");

//routes
router.use("/authors", authorsRoute);
router.use("/titles", titlesRoute);
router.use("/formats", formatsRoute);

module.exports = router;
