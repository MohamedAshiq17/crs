import React, { useEffect, useState } from "react";
import axios from "axios";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        setCars(response.data);
      } catch (error) {
        alert("Error fetching cars!");
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h1>Available Cars</h1>
      {cars.map((car) => (
        <div key={car.id}>
          <p>
            {car.brand} {car.model} - ${car.dailyRate}/day
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cars;
