#!/usr/bin/env node

const amqp = require("amqplib/callback_api");
const NotificationService = require("./notification");

amqp.connect(process.env.MQ_URL, (error, connection) => {
  if (error) throw error;

  // Idempotent: Only creates the channel when it doesn't exist
  connection.createChannel((error, channel) => {
    const queue = "messages";

    channel.assertQueue(queue, { durable: false });

    // Subscribe to the channel
    channel.consume(
      queue,
      (message) => {
        NotificationService.sendEmail(JSON.parse(message.content.toString()));
      },
      { noAck: true }
    );
  });
});
