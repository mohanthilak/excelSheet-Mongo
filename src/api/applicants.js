const express = require("express");
const router = express.Router();
const { Upload } = require("../config");
const excelDataController = require("./controllers/appllicant-controller");

router.get("/", (req, res) => {
  console.log("hehehehe");
  res.send("<h1>you only get shot!</h1>");
});

router.post("/exceldata", Upload.single("excelFile"), excelDataController);

module.exports = router;
