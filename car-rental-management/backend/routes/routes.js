const express = require("express");
const authController = require("../controllers/authController");
const carController = require("../controllers/carController");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/cars", carController.getAllCars);
router.post("/book", bookingController.createBooking);

module.exports = router;
