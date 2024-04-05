const express = require("express");
const router = express.Router();
const passport = require("passport");
const restaurantCtrl = require("../controller/restaurantController");

router.get("/view/:restaurant", restaurantCtrl.show);

module.exports = router;
