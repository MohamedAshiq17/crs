const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/routes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

sequelize.sync().then(() => console.log("Database synchronized"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
