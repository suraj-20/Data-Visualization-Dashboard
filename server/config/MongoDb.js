const mongoose = require("mongoose");

module.exports.connectMongoDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Mongodb connected");
  } catch (error) {
    console.error({ message: error.message });
  }
};
