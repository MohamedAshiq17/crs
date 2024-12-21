const Car = require("../models/Car");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll({ where: { status: "available" } });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCar = async (req, res) => {
  try {
    const { brand, model, dailyRate } = req.body;
    const car = await Car.create({ brand, model, dailyRate });
    res.status(201).json({ message: "Car added successfully!", car });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
