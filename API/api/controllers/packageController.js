"use strict";

var mongoose = require("mongoose"),
    TestSuite = mongoose.model("TestSuite"),
    TestCase = mongoose.model("TestCase"),
    Package = mongoose.model("Package");

exports.create_a_package = async (req, res) => {
    TestSuite.find({ projectId: req.params.projectId }, ).exec((err, testSuits) => {
        if (err) return err;
        const ids = testSuits.map(el => {
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
            let new_Package = new Package(req.body);
            new_Package.created_at = new Date();
            new_Package.testSuites = newTestSuitsArray;
            new_Package.projectId = req.params.projectId;
            new_Package.save((err, testSuite) => {
                if (err) res.send(err);
                res.json(testSuite);
            });
        });
    });
};