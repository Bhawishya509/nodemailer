import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv"
dotenv.config()
const app = express();
var trans = nodemailer.createTransport({
   service:"gmail",
  auth: {
    user: "lollysingh509@gmail.com",
    pass: process.env.PASS,
    //yah password milyga meko account may securtity may app password nay
  },
});
var mailoption = {
  from: "lollysingh509@gmail.com",
  to: "singhdollysingh28@gmail.com",
  subject:"motu",
  html :"<h1> hiii</h1>"
};
trans.sendMail(mailoption, (error, info) => {
  if (error) {
    console.log("error");
  } else {
    console.log("success");
  }
});
