import { DataSource } from "./dataSource";

const getAllProjects = () => {
  return DataSource({
    url: "/projects",
    method: "GET"
  });
};
const newProject = data => {
  return DataSource({
    url: "/projects",
    method: "POST",
    data
  });
};

export const ProjectService = {
  getAllProjects, // GET
  newProject //POST
};
