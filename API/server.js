const compression = require("compression");
const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require("mongoose"),
  Project = require("./api/models/projectModel"),
  TestSuite = require("./api/models/testSuiteModel"),
  TestCase = require("./api/models/testCaseModel"),
  Package = require("./api/models/packageModel"),
  TestCaseExecution = require("./api/models/testCaseExecutionsModel"),
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/qaDashboard",
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});
app.use(compression()); //Compress all routes

const routes = require("./api/routes/qaDashboardRoutes"); //importing route

routes(app); //register the route

app.listen(port);

console.log("QA Dashboard RESTFUL API server started on: " + port);
