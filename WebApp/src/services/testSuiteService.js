import { DataSource } from "./dataSource";

const getTestSuitesByProjectId = projectId => {
  return DataSource({
    url: `/testSuites/${projectId}`,
    method: "GET"
  });
};

const createTestSuite = data => {
  return DataSource({
    url: `/testSuites`,
    method: "POST",
    data
  });
};
const deleteTestSuite = testSuiteId => {
  return DataSource({
    url: `/testSuite/${testSuiteId}`,
    method: "DELETE"
  });
};

export const TestSuiteService = {
  getTestSuitesByProjectId, // GET
  createTestSuite,
  deleteTestSuite
};
