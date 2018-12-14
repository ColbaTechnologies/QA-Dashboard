"use strict";

const mongoose = require("mongoose"),
  TestExecution = mongoose.model("TestCaseExecution"),
  TestCase = mongoose.model("TestCase");

exports.list_all_testCaseExecutionByIdTestCaseId = (req, res) =>{
  TestExecution.find({ testCaseId: req.params.testCaseId }, (
    err,
    testCases
  ) => {
    if (err) res.send(err);
    res.json(testCases);
  });
};

exports.get_test_execution_by_id = (req, res) =>{
  TestExecution.findOne({ _id: req.params.testExecutionId }, (
    err,
    testExecution
  ) =>{
    if (err) res.send(err);
    res.json(testExecution);
  });
};

exports.create_a_testCaseExecution = (req, res) =>{
  let new_TestExecution = new TestExecution(req.body);
  new_TestExecution.dateTested = new Date();

  TestCase.findOneAndUpdate(
    { _id: new_TestExecution.testCaseId },
    { $set: { currentStatus: new_TestExecution.status } },
    { new: true },
    (err, bar) => {
      if (err) res.send(err);
    }
  );

  new_TestExecution.save((err, testCase) => {
    if (err) res.send(err);
    res.json(testCase);
  });
};
