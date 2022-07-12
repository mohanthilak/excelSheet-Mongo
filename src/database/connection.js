const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/excelSheets");
    console.log("DB connected");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
