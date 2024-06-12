const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({}, { strict: false });
const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
