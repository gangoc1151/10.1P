const mongoose = require("mongoose");

var RequestSchema = new mongoose.Schema({
  TaskType: String,
  Title: String,
  Description: String,
  Expiry: String,
  Question: String,
  RequireWorkers: String,
  Reward: String,
  Number_worker: String,
});
module.exports = mongoose.model("RequestSchema", RequestSchema);
