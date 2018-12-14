import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

export const TesterLogCard = ({ onChange, model }) => {
  return (
    <Row>
      <Col xs="12">
        <Card>
          <CardHeader>
            <strong>QA Tester Log</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="testerName">Tester's name</Label>
                  <Input
                    type="text"
                    value={model.testerName}
                    onChange={e => onChange(e)}
                    name="testerName"
                    id="testerName"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="environment">Environment</Label>
                  <Input
                    type="text"
                    value={model.environment}
                    onChange={e => onChange(e)}
                    name="environment"
                    id="environment"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup row>
                  <Col xs="12">
                    <Label htmlFor="select">Status</Label>
                  </Col>
                  <Col xs="12">
                    <Input
                      type="select"
                      value={model.status}
                      onChange={e => onChange(e)}
                      name="status"
                      id="status"
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
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
