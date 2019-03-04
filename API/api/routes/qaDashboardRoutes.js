"use strict";
module.exports = function(app) {
  const projects = require("../controllers/projectController");
  const testSuites = require("../controllers/testSuiteController");
  const testCases = require("../controllers/testCaseController");
  const testCaseExecution = require("../controllers/testExecutionController");
  const projectPackage = require("../controllers/packageController");

  app
    .route("/projects")
    .get(projects.list_all_projects)
    .post(projects.create_a_project);
  app.route("/projects/:email").get(projects.list_all_projects_by_email);

  app.route("/testSuite/:testSuiteId").delete(testSuites.delete_a_testSuite);
  app
    .route("/testSuites/:projectId")
    .get(testSuites.list_all_testSuitesFromProject);

  app.route("/testSuites").post(testSuites.create_a_testSuite);

  app
    .route("/testCases/:testSuiteId")
    .get(testCases.list_all_testCasesByTestSuitId);
  app
    .route("/testCases/:projectId/:testCaseId")
    .get(testCases.get_testCaseById)
    .put(testCases.update_a_TestCase)
    .delete(testCases.delete_a_testCase);

  app.route("/testCases").post(testCases.create_a_testCase);

  app
    .route("/executions/:projectId/:testCaseId")
    .get(testCaseExecution.list_all_testCaseExecutionByIdTestCaseId);

  app
    .route("/executions/:testExecutionId")
    .get(testCaseExecution.get_test_execution_by_id);

  app.route("/executions").post(testCaseExecution.create_a_testCaseExecution);

  app.route("/packages/:projectId").post(projectPackage.create_a_package);
};
