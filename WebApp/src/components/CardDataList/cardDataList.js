import React from "react";
import {
  Card,
  CardBody,
  ListGroupItem,
  CardHeader,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col
} from "reactstrap";

export const CardDataList = ({
  title,
  buttonText,
  head,
  children,
  addValueTolist,
  onFilterChange
}) => {
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col xs={onFilterChange ? 5 : 12}>
            <strong>{title}</strong>
          </Col>
          <Col xs="7">
            {onFilterChange && (
              <InputGroup>
                <Input
                  type="text"
                  id="filter"
                  name="filter"
                  onChange={e => onFilterChange(e)}
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            )}
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        {head}
        {children()}
        {buttonText &&
          addValueTolist && (
            <ListGroupItem
              className="add"
              tag="a"
              onClick={() => addValueTolist()}
            >
              {buttonText}
            </ListGroupItem>
          )}
      </CardBody>
    </Card>
  );
};
