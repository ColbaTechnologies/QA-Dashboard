"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestCaseExecutionSchema = new Schema({
  testSuiteId: String,
  testCaseId: String,
  projectId: String,
  textCaseDescription: String,
  createdBy: String,
  reviewdBy: String,
  version: String,
  testerName: String,
  environment: String,
  dateTested: String,
  status: String,
  prerequisites: [Schema.Types.Mixed],
  dataRequirements: [Schema.Types.Mixed],
  steps: [Schema.Types.Mixed]
});

module.exports = mongoose.model("TestCaseExecution", TestCaseExecutionSchema);
