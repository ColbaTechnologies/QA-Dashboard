'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new Schema(
    {
        name:String,
        description:String,
        color:String,
        image:String
    }
);

module.exports = mongoose.model('Project', ProjectSchema);