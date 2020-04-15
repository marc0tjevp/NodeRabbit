#!/usr/bin/env node

const amqp = require("amqplib/callback_api");

let channel = null;

amqp.connect(process.env, (error, connection) => {
  connection.createChannel((error, createdChannel) => {
    channel = createdChannel;
  });
});

const sendMessage = async (queueName, data) => {
  channel.sendToQueue(queueName, Buffer.from(data));
};

process.on("exit", (code) => {
  channel.close();
});

module.exports = { sendMessage };
