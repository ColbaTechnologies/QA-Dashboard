import { DataSource } from "./dataSource";

const createTestCaseExecution = data => {
  return DataSource({
    url: `/executions`,
    method: "POST",
    data
  });
};

const getAllExecutionsFromATestCase = (projectId, testCaseId) => {
  return DataSource({
    url: `/executions/${projectId}/${testCaseId}`,
    method: "GET"
  });
};

const getTestExecutionById = testExecutionId => {
  return DataSource({
    url: `/executions/${testExecutionId}`,
    method: "GET"
  });
};

export const TestCaseExecutionService = {
  createTestCaseExecution, // GET
  getAllExecutionsFromATestCase,
  getTestExecutionById
};
