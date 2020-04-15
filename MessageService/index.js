#!/usr/bin/env node

const express = require("express");
const bodyParser = require("body-parser");

const app = (module.exports = express());
const port = process.env.PORT || 3000;
const routes = require("./routes");

app.use(bodyParser.json({ extended: true }));

app.use("/api", routes);

// Listen on port
const server = app.listen(port, () => {
  const port = server.address().port;
  console.log("Express: Port " + port);
});
