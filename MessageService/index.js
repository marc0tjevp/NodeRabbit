#!/usr/bin/env node

const express = require("express");
const bodyParser = require("body-parser");

const app = (module.exports = express());
const port = process.env.PORT || 3000;
const routes = require("./routes");

app.use(bodyParser.json({ extended: true }));

app.use("/api", routes);

// Listen on port
let server = app.listen(port, () => {
  let port = server.address().port;
  console.log("Express: Port " + port);
});
