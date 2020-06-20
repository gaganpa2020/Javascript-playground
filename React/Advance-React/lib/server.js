const express = require("express");
const config = require("./config");

const app = express();

app.use(express.static("public"));

app.listen(config.port),
  function listenHandler() {
    console.log(`Running on ${config.port}`);
  };
