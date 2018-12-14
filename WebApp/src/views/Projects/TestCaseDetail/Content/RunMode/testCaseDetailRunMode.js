import React, { Fragment } from "react";
import {
  Badge,
  Col,
  ListGroupItem,
  FormGroup,
  Input,
  Button,
  Row
} from "reactstrap";
import { TesterLogCard } from "./testerLogCard";
import { CardDataList } from "../../../../../components/CardDataList/cardDataList";

export const TestCaseDetailRunMode = ({ onChange, model, onSave }) => {
  return (
    <Fragment>
      <Row>
        <Col xs="12">
          <Button
            color="success"
            size="lg"
            style={{ height: 100, marginBottom: 20 }}
            onClick={() => onSave()}
            block
          >
            SAVE TEST EXECUTION
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <CardDataList title="Test Case Information">
            {() => (
              <ListGroupItem tag="a">
                <Row>
                  <Col xs="3">
                    <h6>Test Case Id</h6>
                  </Col>
                  <Col xs="3">
                    <h6>Created By</h6>
                  </Col>
                  <Col xs="3">
                    <h6>Reviewd By</h6>
                  </Col>
                  <Col xs="3">
                    <h6>Version</h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">{model._id}</Col>
                  <Col xs="3">{model.createdBy}</Col>
                  <Col xs="3">{model.reviewdBy}</Col>
                  <Col xs="3">{model.version}</Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col xs="12">
                    <h6>Test Case Description</h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">{model.textCaseDescription}</Col>
                </Row>
              </ListGroupItem>
            )}
          </CardDataList>
        </Col>
        <Col xs="6">
          <TesterLogCard
            model={model}
            onChange={(e, list) => onChange(e, list)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <CardDataList
            title="Prerequisites"
            head={
              <ListGroupItem tag="a">
                <Row>
                  <Col xs="1">
                    <h6>Id</h6>
                  </Col>
                  <Col xs="10">
                    <h6>Value</h6>
                  </Col>
                </Row>
              </ListGroupItem>
            }
          >
            {() =>
              model.prerequisites.map(item => (
                <ListGroupItem key={item.id} tag="a" action>
                  <Row>
                    <Col xs="1">
                      <h5>
                        <Badge color="secondary">{item.id + 1}</Badge>
                      </h5>
                    </Col>
                    <Col xs="10">{item.value}</Col>
                  </Row>
                </ListGroupItem>
              ))
            }
          </CardDataList>
        </Col>
        <Col xs="6">
          <CardDataList
            title="Test Data Requirement"
            head={
              <ListGroupItem tag="a">
                <Row>
                  <Col xs="1">
                    <h6>Id</h6>
                  </Col>
                  <Col xs="5">
                    <h6>Key</h6>
                  </Col>
                  <Col xs="6">
                    <h6>Value</h6>
                  </Col>
                </Row>
              </ListGroupItem>
            }
          >
            {() =>
              model.dataRequirements.map(item => (
                <ListGroupItem key={item.id} tag="a" action>
                  <Row>
                    <Col xs="1">
                      <h5>
                        <Badge color="secondary">{item.id + 1}</Badge>
                      </h5>
                    </Col>
                    <Col xs="5">{item.key}</Col>
                    <Col xs="6">{item.value}</Col>
                  </Row>
                </ListGroupItem>
              ))
            }
          </CardDataList>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CardDataList
            title="Test Conditions"
            head={
              <ListGroupItem tag="a">
                <Row>
                  <Col xs="1">
                    <h6>Step</h6>
                  </Col>
                  <Col xs="3">
                    <h6>Step Details</h6>
                  </Col>
                  <Col xs="3">
                    <h6>Expected Results</h6>
                  </Col>
                  <Col xs="3">
                    <h6>Actual Results</h6>
                  </Col>
                  <Col xs="2">
                    <h6>Status</h6>
                  </Col>
                </Row>
              </ListGroupItem>
            }
          >
            {() =>
              model.steps.map(item => (
                <ListGroupItem key={item.id} tag="a" action>
                  <Row>
                    <Col xs="1">
                      <h5>
                        <Badge color="secondary">{item.id + 1}</Badge>
                      </h5>
                    </Col>
                    <Col xs="3">{item.stepDetail}</Col>
                    <Col xs="3">{item.expectedResults}</Col>
                    <Col xs="3">
                      <FormGroup>
                        <Input
                          data-attr={item.id}
                          placeholder="Actual Results..."
                          value={item.actualResults}
                          onChange={e => onChange(e, "steps")}
                          rows={5}
                          type="textarea"
                          name="actualResults"
                          id="actualResults"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="2">
                      <FormGroup row>
                        <Col xs="12">
                          <Input
                            data-attr={item.id}
                            value={item.status}
                            onChange={e => onChange(e, "steps")}
                            type="select"
                            name="status"
                            id="status"
                            placeholder="status"
                          >
                            <option value="not-executed">Not Executed</option>
                            <option value="suspended">Suspended</option>
                            <option value="fail">Fail</option>
                            <option value="pass">Pass</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))
            }
          </CardDataList>
        </Col>
      </Row>
    </Fragment>
  );
};
