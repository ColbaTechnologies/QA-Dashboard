'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PackageSchema = new Schema(
    {
        created_at:Date,
        testSuites:[Schema.Types.Mixed],
        projectId:String
    },
);

module.exports = mongoose.model('Package', PackageSchema);