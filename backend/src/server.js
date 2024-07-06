const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
require("./db/index.js");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 1000);

app.use("/", require("./routers/index.js"));

app.listen(app.get("port"), () => {
  console.log(`server on port: ${app.get("port")}`);
});
