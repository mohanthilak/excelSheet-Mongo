const express = require("express");
const { applicantRoutes } = require("./api");
const cors = require("cors");
module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(`${__dirname}/resources`));
  app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    })
  );

  app.use("/", applicantRoutes);
};
