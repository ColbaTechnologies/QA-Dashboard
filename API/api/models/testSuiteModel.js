'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TestSuiteSchema = new Schema(
    {
        name:String,
        description:String,
        projectId:String
    },
);

module.exports = mongoose.model('TestSuite', TestSuiteSchema);