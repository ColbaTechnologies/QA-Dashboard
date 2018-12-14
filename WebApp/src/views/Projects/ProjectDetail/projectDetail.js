import React, { Component } from "react";
import "./projectDetail.scss";
import { Col, Row, Button } from "reactstrap";
import { TestCaseService } from "../../../services/testCaseService";
import { TestSuiteService } from "../../../services/testSuiteService";
import { PackageService } from "../../../services/packageService";
import { TestSuitesCard } from "./Content/testSuitesCard";
import { TestCasesCard } from "./Content/testCasesCard";
class ProjectDetail extends Component {
  state = {
    testSuiteSelected: null,
    testCaseSelected: null,
    togglePrimary: false,
    testSuites: []
  };
  projectId = this.props.location.pathname.split("/")[2];
  isExecution = this.props.location.pathname.split("/")[3] ? true : false;
  icon = [];
  allTestSuites = [];

  componentDidMount() {
    let testSuiteSelected = localStorage.getItem("testSuiteSelected");
    testSuiteSelected = testSuiteSelected
      ? testSuiteSelected
      : this.state.testSuiteSelected;
    TestSuiteService.getTestSuitesByProjectId(this.projectId).then(response => {
      if (response) {
        this.allTestSuites = response;
        this.setState(() => ({
          ...this.state,
          testSuites: response,
          testSuiteSelected
        }));
      }
    });
  }

  selectTestSuite = testSuiteSelected => {
    localStorage.setItem("testSuiteSelected", testSuiteSelected);
    this.setState({
      testSuiteSelected
    });
  };

  createTestCase = () => {
    let newSuite = {
      projectId: this.projectId,
      testSuiteId: this.state.testSuiteSelected
    };
    TestCaseService.createTestCase(newSuite).then(result => {
      this.props.history.push({
        pathname: `/projects/${this.projectId}/testCase/${result._id}`,
        search: `mode=edit`
      });
    });
  };

  goToTestExecution = testCaseId => {
    this.setState(
      {
        testCaseSelected: testCaseId
      },
      () => {
        this.props.history.push({
          pathname: `/projects/${
            this.projectId
          }/testCase/${testCaseId}/testExecutions`
        });
      }
    );
  };

  selectTestCase = (testCaseId, mode) => {
    this.setState(
      {
        testCaseSelected: testCaseId
      },
      () => {
        this.props.history.push({
          pathname: `/projects/${this.projectId}/testCase/${testCaseId}`,
          search: `mode=${mode}`
        });
      }
    );
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  getTestCasesSelecter = () => {
    let testCases = this.state.testSuites.filter(
      testSuite => testSuite._id === this.state.testSuiteSelected
    );

    return testCases.length > 0 ? testCases[0].testCases : null;
  };

  createTestSuite = data => {
    const { testSuites } = this.state;
    let newSuite = {
      testCases: [],
      projectId: this.projectId,
      ...data
    };
    TestSuiteService.createTestSuite(newSuite).then(result => {
      newSuite = {
        ...newSuite,
        ...result.data
      };
      testSuites.push(newSuite);
      this.setState(
        {
          testSuites
        },
        () => this.toggleModal()
      );
    });
  };

  deleteTestCase = id => {
    TestCaseService.deleteTestCase(this.projectId, id).then(() => {
      let { testSuites } = this.state;

      this.allTestSuites = this.allTestSuites.map(suite => {
        if (suite._id === this.state.testSuiteSelected) {
          suite.testCases = suite.testCases.filter(
            testCase => testCase._id !== id
          );
        }
        return suite;
      });

      testSuites = testSuites.map(suite => {
        if (suite._id === this.state.testSuiteSelected) {
          suite.testCases = suite.testCases.filter(
            testCase => testCase._id !== id
          );
        }
        return suite;
      });

      this.setState(() => ({
        ...this.state,
        testSuites
      }));
    });
  };

  onFilterChange = (e, property) => {
    let newValues = null;
    let allTestSuites = JSON.parse(JSON.stringify(this.allTestSuites));
    if ("testSuites" === property) {
      newValues = allTestSuites.filter(
        item =>
          item.name &&
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ===
            true
      );
    }
    if ("testCases" === property) {
      newValues = allTestSuites.map(suite => {
        suite.testCases = suite.testCases.filter(
          testCase => testCase._id.includes(e.target.value) === true
        );
        return suite;
      });
    }
    this.setState(() => ({ ...this.state, testSuites: newValues }));
  };

  createPackage = () => {
    let allSuitesPassed = true;
    let { testSuites } = this.state;
    testSuites.forEach(testSuite => {
      let testCasesNotPassed = testSuite.testCases.filter(
        testCase => testCase.currentStatus !== "pass"
      );
      if (testCasesNotPassed.length !== 0) {
        allSuitesPassed = false;
      }
    });
    if (allSuitesPassed) {
      PackageService.createPackage(this.projectId)
        .then(result => {
          alert(JSON.stringify(result));
          console.log(JSON.stringify(result));
        })
        .catch(e => {
          alert(e);
        });
    } else {
      alert("Some Test suite is not passed");
    }
  };

  render() {
    let testCasesSelected = this.getTestCasesSelecter();
    return (
      <div className="animated fadeIn">
        <Row id="project">
          <Col xs="12">
            <Button
              color="warning"
              size="lg"
              style={{ height: 100, marginBottom: 20 }}
              onClick={() => this.createPackage()}
              block
            >
              CREATE A RELEASE PACKAGE
            </Button>
          </Col>
          <Col sm="12" xl="6">
            <TestSuitesCard
              {...this.state}
              onFilterChange={filter =>
                this.onFilterChange(filter, "testSuites")
              }
              buttonText={!this.isExecution && "ADD TEST SUITE"}
              toggleModal={this.toggleModal}
              createTestSuite={data => this.createTestSuite(data)}
              selectTestSuite={testSuite => this.selectTestSuite(testSuite)}
            />
          </Col>
          {this.state.testSuiteSelected !== null &&
            testCasesSelected && (
              <Col sm="12" xl="6">
                <TestCasesCard
                  onFilterChange={filter =>
                    this.onFilterChange(filter, "testCases")
                  }
                  buttonText={!this.isExecution && "ADD TEST CASE"}
                  createTestCase={data => this.createTestCase(data)}
                  testCaseSelected={this.state.testCaseSelected}
                  testCasesSelected={testCasesSelected}
                  projectId={this.projectId}
                  isExecution={this.isExecution}
                  goToTestExecution={testCase =>
                    this.goToTestExecution(testCase)
                  }
                  selectTestCase={(testCase, mode) =>
                    this.selectTestCase(testCase, mode)
                  }
                  deleteTestCase={(testCase, mode) =>
                    this.deleteTestCase(testCase, mode)
                  }
                />
              </Col>
            )}
        </Row>
      </div>
    );
  }
}

export default ProjectDetail;
