import React from "react";
import { Card, Col, CardBody } from "reactstrap";

export const ProjectLogo = ({
  _id,
  color = "#CCCCCC",
  image = "https://via.placeholder.com/150x150.png?text=Add",
  name = "New Project",
  onSelect = () => {},
  newProject = () => {}
}) => {
  return (
    <Col xs="12" sm="4" lg="4">
      <Card
        className="center"
        style={{ backgroundColor: color }}
        onClick={_id ? () => onSelect(_id) : () => newProject()}
      >
        <CardBody>
          <img width={150} height={150} src={image} alt={`Logo of ${name}`} />
        </CardBody>
      </Card>
    </Col>
  );
};
