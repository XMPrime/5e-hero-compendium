require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");

const server = express();

// middleware

// database connection
const mongoDB_URI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@5e-hero-compendium.vaebo.mongodb.net/5e-hero-compendium
Copy`;
mongoose
  .connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((result) => {
    console.log("connected to mongoDB");
    server.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/test", (res, req) => res.send("test pass"));
module.exports = server;
module.exports.handler = serverless(server);
