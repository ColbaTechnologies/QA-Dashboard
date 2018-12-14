import React, { Fragment } from "react";
import { TestCaseInfoCard } from "./testCaseInfoCard";
import { CardDataList } from "../../../../../components/CardDataList/cardDataList";
import { Badge, Button, Col, FormGroup, Input, Row } from "reactstrap";

export const TestCaseDefinition = ({ model, onAdd, onChange, onSave }) => {
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
            SAVE TEST CASE
          </Button>
        </Col>
      </Row>
      <TestCaseInfoCard onDataChange={e => onChange(e)} {...model} />

      <Row>
        <Col xs="6">
          <CardDataList
            title="Prerequisites"
            buttonText="ADD PREREQUISITE"
            addValueTolist={() => onAdd("prerequisites")}
            head={
              <Row>
                <Col xs="1">
                  <h6>Id</h6>
                </Col>
                <Col xs="10">
                  <h6>Value</h6>
                </Col>
              </Row>
            }
          >
            {() =>
              model.prerequisites.map(item => (
                <Row key={item.id}>
                  <Col xs="1">
                    <h3>
                      <Badge color="secondary">{item.id + 1}</Badge>
                    </h3>
                  </Col>
                  <Col xs="10">
                    <FormGroup>
                      <Input
                        type="text"
                        data-attr={item.id}
                        value={item.value}
                        onChange={e => onChange(e, "prerequisites")}
                        name="value"
                        id="value"
                        placeholder="Prerequisite"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              ))
            }
          </CardDataList>
        </Col>
        <Col xs="6">
          <CardDataList
            title="Test Data Requirement"
            buttonText="ADD DATA REQUIREMENT"
            addValueTolist={() => onAdd("dataRequirements")}
            head={
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
            }
          >
            {() =>
              model.dataRequirements.map(item => (
                <Row key={item.id}>
                  <Col xs="1">
                    <h3>
                      <Badge color="secondary">{item.id + 1}</Badge>
                    </h3>
                  </Col>
                  <Col xs="5">
                    <FormGroup>
                      <Input
                        data-attr={item.id}
                        value={item.key}
                        onChange={e => onChange(e, "dataRequirements")}
                        type="text"
                        name="key"
                        id="key"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="6">
                    <FormGroup>
                      <Input
                        type="text"
                        data-attr={item.id}
                        value={item.value}
                        onChange={e => onChange(e, "dataRequirements")}
                        name="value"
                        id="value"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              ))
            }
          </CardDataList>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <CardDataList
            title="Test Conditions"
            buttonText="ADD STEP"
            addValueTolist={() => onAdd("steps")}
            head={
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
            }
          >
            {() =>
              model.steps.map(item => (
                <Row key={item.id}>
                  <Col xs="1">
                    <h3>
                      <Badge color="secondary">{item.id + 1}</Badge>
                    </h3>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Input
                        data-attr={item.id}
                        placeholder="Details..."
                        value={item.stepDetail}
                        onChange={e => onChange(e, "steps")}
                        rows={5}
                        type="textarea"
                        name="stepDetail"
                        id="stepDetail"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Input
                        data-attr={item.id}
                        placeholder="Expected Results..."
                        value={item.expectedResults}
                        onChange={e => onChange(e, "steps")}
                        rows={5}
                        type="textarea"
                        name="expectedResults"
                        id="expectedResults"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Input
                        disabled
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
                          disabled
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
              ))
            }
          </CardDataList>
        </Col>
      </Row>
    </Fragment>
  );
};
