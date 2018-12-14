"use strict";

const mongoose = require("mongoose"),
  TestCase = mongoose.model("TestCase");

exports.list_all_testCasesByTestSuitId = (req, res) => {
  TestCase.find({ testSuiteId: req.params.testSuiteId }, function(
    err,
    testCases
  ) {
    if (err) res.send(err);
    res.json(testCases);
  });
};

exports.update_a_TestCase = (req, res) => {
  let testCaseToUpdate = req.body;
  testCaseToUpdate.version = parseInt(req.body.version) + 1;
  testCaseToUpdate.currentStatus = "not-executed";
  TestCase.findOneAndUpdate(
    { _id: req.params.testCaseId },
    req.body,
    { new: true },
    (err, bar) => {
      if (err) res.send(err);
      res.json(bar);
    }
  );
};

exports.get_testCaseById = (req, res) => {
  TestCase.findOne({ _id: req.params.testCaseId }, (err, testCases) => {
    if (err) res.send(err);
    res.json(testCases);
  });
};

exports.create_a_testCase = (req, res) => {
  let new_TestCase = new TestCase(req.body);
  new_TestCase.version = "1";
  new_TestCase.currentStatus = "not-executed";
  new_TestCase.status = "not-executed";
  new_TestCase.save((err, testCase) => {
    if (err) res.send(err);
    res.json(testCase);
  });
};

exports.delete_a_testCase = (req, res) => {
  TestCase.remove(
    {
      _id: req.params.testCaseId
    },
    err => {
      if (err) res.send(err);
      res.json({ message: "bar successfully deleted" });
    }
  );
};
