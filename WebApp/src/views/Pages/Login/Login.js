import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Row
} from "reactstrap";

const Login = ({ login }) => {
  return (
    <div
      className="app flex-row align-items-center"
      style={{ backgroundColor: "#0d3871" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card
                className="p-4 text-center"
                style={{ backgroundColor: "#0d3871", border: "none" }}
              >
                <CardBody>
                  <Form>
                    <Row className="justify-content-center">
                      <img
                        src="http://colba.es/wp-content/uploads/2018/03/colba-logo.png"
                        alt=""
                      />
                    </Row>
                    <h2
                      style={{
                        color: "#FFF",
                        marginTop: "30px",
                        marginBottom: "30px"
                      }}
                    >
                      Quality Assurance Dashboard
                    </h2>
                    <Row>
                      <Col xs="12">
                        <Button
                          onClick={login}
                          color="primary btn-lg"
                          className="px-5"
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
