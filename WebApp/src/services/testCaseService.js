import { DataSource } from "./dataSource";

const getTestCaseById = (projectId, testCaseID) => {
  return DataSource({
    url: `/testCases/${projectId}/${testCaseID}`,
    method: "GET"
  });
};

const updateTestCase = (projectId, testCaseID, data) => {
  return DataSource({
    url: `/testCases/${projectId}/${testCaseID}`,
    method: "PUT",
    data
  });
};

const createTestCase = data => {
  return DataSource({
    url: `/testCases`,
    method: "POST",
    data
  });
};

const deleteTestCase = (projectId, testCaseID) => {
  return DataSource({
    url: `/testCases/${projectId}/${testCaseID}`,
    method: "DELETE"
  });
};

export const TestCaseService = {
  getTestCaseById, // GET
  updateTestCase,
  createTestCase,
  deleteTestCase
};
