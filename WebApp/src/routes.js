import React from "react";

const ProjectList = React.lazy(() =>
  import("./views/Projects/ProjectsList/projectList.js")
);
const TestCaseDetail = React.lazy(() =>
  import("./views/Projects/TestCaseDetail/testCaseDetail.js")
);
const TestCaseExecutionList = React.lazy(() =>
  import("./views/Projects/TestCaseExecutionList/testCaseExecutionList.js")
);

const TestExecutionDetail = React.lazy(() =>
  import("./views/Projects/TestExecutionDetail/testExecutionDetail.js")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/projects", exact: true, name: "Projects", component: ProjectList },
  {
    path: "/projects/:projectId/testCase/:testCaseId",
    exact: true,
    name: "Test Case",
    component: TestCaseDetail
  },
  {
    path: "/projects/:projectId/testCase/:testCaseId/testExecutions",
    exact: true,
    name: "Test Case Executions",
    component: TestCaseExecutionList
  },
  {
    path: "/executions/testExecution/:testExecutionId",
    exact: true,
    name: "Test Case Execution",
    component: TestExecutionDetail
  }
];


export default routes;
