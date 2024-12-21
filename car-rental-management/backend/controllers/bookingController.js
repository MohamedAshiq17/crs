const Booking = require("../models/Booking");
const Car = require("../models/Car");

exports.createBooking = async (req, res) => {
  try {
    const { userId, carId, startDate, endDate } = req.body;
    const car = await Car.findByPk(carId);
    if (!car || car.status !== "available") {
      return res.status(400).json({ message: "Car is not available!" });
    }

    const totalAmount = calculateAmount(startDate, endDate, car.dailyRate);
    const booking = await Booking.create({ userId, carId, startDate, endDate, totalAmount });

    // Mark car as booked
    car.status = "booked";
    await car.save();

    res.status(201).json({ message: "Booking successful!", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const calculateAmount = (startDate, endDate, dailyRate) => {
  const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
  return days * dailyRate;
};
