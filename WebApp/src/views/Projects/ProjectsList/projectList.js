import React, { Component } from "react";
import "./projectList.scss";
import { ProjectService } from "../../../services/projectServices";
import { ProjectLogo } from "./Content/projectLogo";
import { NewProjectModal } from "./Content/newProjectModal";
import { Row } from "reactstrap";

class ProjectList extends Component {
  state = {
    projects: [],
    modal: false
  };
  onSelect = id => {
    this.props.history.push({
      pathname: `/projects/${id}`
    });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  newProject = data => {
    const { projects } = this.state;
    ProjectService.newProject(data).then(newProject => {
      projects.push(newProject);
      this.setState(
        () => ({ projects }),
        () => {
          window.location.reload();
          this.toggleModal();
        }
      );
    });
  };
  componentDidMount() {
    localStorage.clear();
    console.log(this.props.user.email);
    ProjectService.getAllProjectsByEmail(this.props.user.email).then(
      projects => {
        this.setState(() => ({ projects }));
      }
    );
  }
  render() {
    const { projects, modal } = this.state;
    return (
      <div className="animated fadeIn">
        <Row id="project-list">
          {projects.map(project => (
            <ProjectLogo
              key={project._id}
              onSelect={_id => this.onSelect(_id)}
              {...project}
            />
          ))}
          <ProjectLogo newProject={() => this.toggleModal()} />
        </Row>
        <NewProjectModal
          modal={modal}
          toggleModal={this.toggleModal}
          newProject={data => this.newProject(data)}
        />
      </div>
    );
  }
}

export default ProjectList;
