const express = require("express");
const expressApp = require("./express-app");
const app = express();
const { ConnectDB } = require("./database");

const startserver = async () => {
  await ConnectDB();
  expressApp(app);
  const port = 4000;

  app.listen(port, () => console.log(`listening to port ${port}`));
};

startserver();
