require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dataRoute = require("./routes/Data");
const { connectMongoDb } = require("./config/MongoDb");

const app = express();
const PORT = process.env.PORT || 5000;
connectMongoDb("mongodb://127.0.0.1:27017/data-visualization");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", dataRoute);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
