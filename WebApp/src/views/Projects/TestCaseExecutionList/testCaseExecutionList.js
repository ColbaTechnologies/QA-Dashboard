import React, { Component, Fragment } from "react";
import { TestCaseExecutionService } from "../../../services/testExecutionService";
import { Col, ListGroupItem, Row } from "reactstrap";
import { CardDataList } from "../../../components/CardDataList/cardDataList";
import { getColorByStatus } from "../helpers";
import moment from "moment";
import "./testCaseExecution.scss";

class TestCaseExecutionList extends Component {
  projectId = this.props.location.pathname.split("/")[2];
  testCaseId = this.props.location.pathname.split("/")[4];
  iconRef = [];

  state = {
    executions: []
  };
  componentDidMount() {
    TestCaseExecutionService.getAllExecutionsFromATestCase(
      this.projectId,
      this.testCaseId
    ).then(executions => {
      this.setState(() => ({ executions }));
    });
  }

  copyOnClipBoard = id => {
    let el = document.createElement("textarea");
    if (el) {
      el.value = window.location.origin + "/#/executions/view/" + id;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      this.iconRef[id].className =
        "icon-link icons font-3xl d-block mt-3 copy-icon copied";
      setTimeout(() => {
        if (this.iconRef[id]) {
          this.iconRef[id].className =
            "icon-link icons font-3xl d-block mt-3 copy-icon";
        }
      }, 1500);
    }
  };

  render() {
    return (
      <Fragment>
        <Row id="testRow">
          <Col xs="12">
            <CardDataList title="Test Case Executions">
              {() =>
                this.state.executions.map(execution => (
                  <ListGroupItem
                    tag="a"
                    key={execution._id}
                    color={getColorByStatus(execution.status)}
                  >
                    <Row>
                      <Col xs="11">
                        <Row
                          onClick={() => {
                            this.props.history.push({
                              pathname: `/executions/testExecution/${
                                execution._id
                              }`
                            });
                          }}
                        >
                          <Col xs="3">
                            <h6>Test Case Id</h6>
                          </Col>
                          <Col xs="3">
                            <h6>Tester Name</h6>
                          </Col>
                          <Col xs="3">
                            <h6>Date Tested</h6>
                          </Col>
                          <Col xs="3">
                            <h6>Version</h6>
                          </Col>
                          <Col xs="3">{execution.testCaseId}</Col>
                          <Col xs="3">{execution.testerName}</Col>
                          <Col xs="3">
                            {moment(execution.dateTested).format(
                              "DD/MM/YYYY HH:mm"
                            )}
                          </Col>
                          <Col xs="3">{execution.version}</Col>
                        </Row>
                      </Col>

                      <Col xs="1">
                        <i
                          ref={icon => (this.iconRef[execution._id] = icon)}
                          onClick={() => this.copyOnClipBoard(execution._id)}
                          className="icon-link icons font-3xl d-block mt-3 copy-icon"
                        />
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
  }
}

export default TestCaseExecutionList;
