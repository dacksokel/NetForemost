const mongoose = require("mongoose");
require("dotenv").config({
  path: "dev.env",
});

mongoose
  .connect(process.env.DB_URI, {})
  .then((db) => console.log("DB connect"))
  .catch((err) => console.error("error check the db conection", err));

module.exports = mongoose;
