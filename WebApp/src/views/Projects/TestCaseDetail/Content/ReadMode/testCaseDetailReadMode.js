import React, { Fragment } from "react";
import "./testCaseDetailReadMode.scss";
import { Badge, Col, ListGroupItem, Row } from "reactstrap";
import { CardDataList } from "../../../../../components/CardDataList/cardDataList";
import moment from "moment/moment";

export const TestCaseDetailReadMode = ({ model, mode }) => {
  return (
    <Fragment>
      <Row>
        <Col xs={model.testerName ? 6 : 12}>
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
        {model.testerName && (
          <Col xs="6">
            <CardDataList title="QA Tester Log">
              {() => (
                <ListGroupItem tag="a">
                  <Row>
                    <Col xs="3">
                      <h6>Tester's name</h6>
                    </Col>
                    <Col xs="3">
                      <h6>Environment</h6>
                    </Col>
                    <Col xs="2">
                      <h6>Status</h6>
                    </Col>
                    <Col xs="4">
                      <h6>Date Tested</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="3">{model.testerName}</Col>
                    <Col xs="3">{model.environment}</Col>
                    <Col xs="2">{model.status}</Col>
                    <Col xs="4">
                      {moment(model.dateTested).format("DD/MM/YYYY HH:mm")}
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
            </CardDataList>
          </Col>
        )}
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
        <Col xs="12">
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
              model.steps.map(item => {
                return (
                  <ListGroupItem key={item.id} tag="a" action>
                    <Row>
                      <Col xs="1">
                        <h5>
                          <Badge color="secondary">{item.id + 1}</Badge>
                        </h5>
                      </Col>
                      <Col xs="3">{item.stepDetail}</Col>
                      <Col xs="3">{item.expectedResults}</Col>
                      <Col xs="3">{item.actualResults}</Col>
                      <Col xs="2">{item.status}</Col>
                    </Row>
                  </ListGroupItem>
                );
              })
            }
          </CardDataList>
        </Col>
      </Row>
    </Fragment>
  );
};
