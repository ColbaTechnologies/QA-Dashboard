"use strict";

var mongoose = require("mongoose"),
  TestSuite = mongoose.model("TestSuite"),
  TestCase = mongoose.model("TestCase");

exports.list_all_testSuitesFromProject = async (req, res) => {
  TestSuite.find({ projectId: req.params.projectId }).exec((err, testSuits) => {
    if (err) res.send(err);
    var ids = testSuits.map(el => {
      return el._id;
    });
    TestCase.find({ testSuiteId: { $in: ids } }, (err, testCases) => {
      if (err) res.send(err);

      let newTestSuitsArray = JSON.parse(JSON.stringify(testSuits));
      newTestSuitsArray = newTestSuitsArray.map(testSuit => {
        testSuit.testCases = testCases.filter(
          item => item.testSuiteId === testSuit._id
        );
        return testSuit;
      });
      res.json(newTestSuitsArray);
    });
  });
};

exports.create_a_testSuite = (req, res) => {
  var new_TestSuite = new TestSuite(req.body);
  new_TestSuite.save((err, testSuite) => {
    if (err) res.send(err);
    res.json(testSuite);
  });
};
