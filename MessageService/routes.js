#!/usr/bin/env node

const routes = require("express").Router();
const MQService = require("./MQService");

routes.get("/", (req, res) =>
  res.status(200).json({ message: "Hello World!" })
);

routes.post("/", async (req, res, next) => {
  console.dir(req.body);
  await MQService.sendMessage("messages", JSON.stringify(req.body));
  res.status(200).end();
});

routes.use("*", (req, res) =>
  res.status(404).json({ message: "Not found" }).end()
);

module.exports = routes;
