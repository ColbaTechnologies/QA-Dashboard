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

export const TestSuiteModal = ({ modal, toggleModal, createTestSuite }) => {
  let name, description;

  const sendTestSuit = e => {
    e.preventDefault();
    createTestSuite({
      name: e.target.name.value,
      description: e.target.description.value
    });
  };

  return (
    <Modal isOpen={modal} toggle={toggleModal} className="modal-primary ">
      <ModalHeader toggle={toggleModal}>New Test Suite</ModalHeader>
      <Form onSubmit={e => sendTestSuit(e)}>
        <ModalBody>
          <Row>
            <Col xs="12">
              <FormGroup>
                <Label htmlFor="name">Test Suit Name</Label>
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
                <Label htmlFor="description">Test Suit Description</Label>

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
