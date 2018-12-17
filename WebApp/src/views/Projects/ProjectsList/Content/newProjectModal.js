import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

export const NewProjectModal = ({
  modal = false,
  toggleModal = () => {},
  newProject = () => {}
}) => {
  let name, description, image, color;

  const sendProject = e => {
    e.preventDefault();
    newProject({
      name: e.target.name.value,
      description: e.target.description.value,
      color: e.target.color.value,
      image: e.target.image.value
    });
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal} className="modal-primary ">
      <ModalHeader toggle={toggleModal}>New Project</ModalHeader>
      <Form onSubmit={e => sendProject(e)}>
        <ModalBody>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Project Name</Label>
                <Input
                  type="text"
                  name="name"
                  ref={input => (name = input)}
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="color">Project Color</Label>
                <Input
                  type="color"
                  name="color"
                  ref={input => (color = input)}
                  id="color"
                  placeholder="Enter the background color of the logo"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="image">Project Logo</Label>
                <Input
                  type="text"
                  name="image"
                  ref={input => (image = input)}
                  id="image"
                  placeholder="Enter a Base64 or URL of an image"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="description">Project Description</Label>

                <Input
                  type="textarea"
                  ref={input => (description = input)}
                  name="description"
                  id="textarea-input"
                  rows="9"
                  placeholder="Description..."
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Create
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
