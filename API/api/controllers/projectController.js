"use strict";

const mongoose = require("mongoose"),
  Project = mongoose.model("Project");

exports.list_all_projects = (req, res) => {
  Project.find({}, function(err, project) {
    if (err) res.send(err);
    res.json(project);
  });
};

exports.create_a_project = (req, res) => {
  let new_Project = new Project(req.body);
  new_Project.save((err, project) => {
    if (err) res.send(err);
    res.json(project);
  });
};
