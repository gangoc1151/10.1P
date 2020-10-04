const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ResquestSchema = require("./Request");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const https = require("https");
const { request } = require("http");
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://viet03121998:viet1234@cluster0.8avgi.mongodb.net/iCrowdTask?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.get("/", (req, res) => {
  res.send("Server is runing");
});
app.post("/", (req, res) => {
  const resquest1 = new ResquestSchema({
    TaskType: req.body.TaskType,
    Title: req.body.Title,
    Description: req.body.Description,
    Expiry: req.body.Expiry,
    Question: req.body.Question,
    RequireWorkers: req.body.RequireWorkers,
    Reward: req.body.Reward,
    Number_worker: req.body.Number_worker,
  });
  resquest1
    .save()
    .then((res) => res.json(request1))
    .catch((err) => {
      res.send("<h3>" + err + "</h3>");
    });
});
app.listen(5000, function (request, response) {
  console.log("Server is running in port 5000");
});
