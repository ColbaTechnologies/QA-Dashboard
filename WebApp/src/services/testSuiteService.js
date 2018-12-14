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

export const TestSuiteService = {
  getTestSuitesByProjectId, // GET
  createTestSuite
};
