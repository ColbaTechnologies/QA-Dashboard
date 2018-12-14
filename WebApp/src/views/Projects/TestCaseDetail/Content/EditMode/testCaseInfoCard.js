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

export const TestCaseInfoCard = ({
  onDataChange,
  _id,
  textCaseDescription,
  createdBy,
  reviewdBy,
  version
}) => {
  return (
    <Row>
      <Col xs="12">
        <Card>
          <CardHeader>
            <strong>Test Case Information</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12">
                <FormGroup>
                  <Label htmlFor="testCaseId">Test Case Id</Label>
                  <Input
                    type="text"
                    value={_id}
                    onChange={e => onDataChange(e)}
                    name="testCaseId"
                    id="testCaseId"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <FormGroup row>
                  <Col xs="12">
                    <Label htmlFor="textCaseDescription">
                      Test Case Description
                    </Label>
                    <Input
                      type="textarea"
                      value={textCaseDescription}
                      onChange={e => onDataChange(e)}
                      name="textCaseDescription"
                      id="textCaseDescription"
                      rows="5"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <FormGroup>
                  <Label htmlFor="createdBy">Created By</Label>
                  <Input
                    type="text"
                    value={createdBy}
                    onChange={e => onDataChange(e)}
                    id="createdBy"
                    name="createdBy"
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Label htmlFor="reviewdBy">Reviewd By</Label>
                  <Input
                    type="text"
                    value={reviewdBy}
                    onChange={e => onDataChange(e)}
                    id="reviewdBy"
                    name="reviewdBy"
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Label htmlFor="version">Version</Label>
                  <Input
                    type="text"
                    disabled
                    value={version}
                    name="version"
                    onChange={e => onDataChange(e)}
                    id="version"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
