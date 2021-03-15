const router = require("express").Router();
const apiRoutes = require("./api");
const views = require("../views/views")

// API Routes
router.use("/api", apiRoutes);

// If no API routes, greet user
router.use((req, res) => {
  res.status(200).send(views());
});

module.exports = router;
