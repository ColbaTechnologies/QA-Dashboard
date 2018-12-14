import React, { Component } from "react";
import { TestCaseDetailReadMode } from "../TestCaseDetail/Content/ReadMode/testCaseDetailReadMode";
import { TestCaseExecutionService } from "../../../services/testExecutionService";

class TestExecutionDetail extends Component {
  state = null;

  componentDidMount() {
    let testExecutionId = this.props.location.pathname.split("/")[3];

    TestCaseExecutionService.getTestExecutionById(testExecutionId).then(
      response => {
        if (response) {
          this.setState(() => ({
            ...response
          }));
        }
      }
    );
  }

  render() {
    if (!this.state) return <div />;

    return <TestCaseDetailReadMode model={this.state} />;
  }
}

export default TestExecutionDetail;
