"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestCaseSchema = new Schema({
  testSuiteId: String,
  projectId: String,
  textCaseDescription: String,
  createdBy: String,
  reviewdBy: String,
  version: String,
  testerName: String,
  environment: String,
  dateTested: String,
  status: String,
  currentStatus: String,
  prerequisites: [Schema.Types.Mixed],
  dataRequirements: [Schema.Types.Mixed],
  steps: [Schema.Types.Mixed]
});

module.exports = mongoose.model("TestCase", TestCaseSchema);
