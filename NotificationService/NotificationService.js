#!/usr/bin/env node

const nodemailer = require("nodemailer");

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_FROM,
    to: data.to,
    subject: data.subject,
    text: data._text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log("Email sent: " + info.response);
  });
};

module.exports = { sendEmail };
