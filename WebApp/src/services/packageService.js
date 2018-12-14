import { DataSource } from "./dataSource";

const createPackage = projectId => {
  return DataSource({
    url: `/packages/${projectId}`,
    method: "POST"
  });
};

export const PackageService = {
    createPackage
};
