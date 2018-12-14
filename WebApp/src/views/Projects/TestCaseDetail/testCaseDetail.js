import React, { Component } from "react";
import "./testCaseDetail.scss";
import queryString from "querystring";
import { TestCaseDefinition } from "./Content/EditMode/testCaseDefinition";
import { TestCaseDetailReadMode } from "./Content/ReadMode/testCaseDetailReadMode";
import { TestCaseDetailRunMode } from "./Content/RunMode/testCaseDetailRunMode";
import { TestCaseService } from "../../../services/testCaseService";
import { transformString } from "../helpers";
import { TestCaseExecutionService } from "../../../services/testExecutionService";

export class TestCaseDetail extends Component {
  state = {
    model: {
      _id: this.props.location.pathname.split("/")[4],
      textCaseDescription: "",
      createdBy: "",
      reviewdBy: "",
      version: "",
      testerName: "",
      environment: "",
      dateTested: "",
      select: "",
      prerequisites: [],
      dataRequirements: [],
      steps: []
    },
    tooltipOpen: false,
    mode: "read"
  };
  projectId = this.props.location.pathname.split("/")[2];

  onAdd = list => {
    let listCopy = JSON.parse(JSON.stringify(this.state.model[list]));
    listCopy.push({
      id: listCopy.length
    });

    this.setState(() => ({
      ...this.state,
      model: {
        ...this.state.model,
        [list]: listCopy
      }
    }));
  };

  /*
  * model.steps = model.steps.map(step => {
              step.expectedResults = this.changeValuesByDataRequirements(
                step.expectedResults
              );
              step.stepDetail = this.changeValuesByDataRequirements(step.stepDetail);
              return step;
            });


          */

  componentDidMount() {
    let mode = queryString.parse(this.props.location.search.replace("?", ""));
    TestCaseService.getTestCaseById(this.projectId, this.state.model._id).then(
      response => {
        if (response) {
          let model = response;
          if ("read" === mode.mode) {
            model = transformString(response);
          }
          if ("run" === mode.mode) {
            model = transformString(response);
          }

          this.setState(() => ({
            ...this.state,
            model: model,
            ...mode
          }));
        }
      }
    );
  }

  onChange = (e, list) => {
    e.preventDefault();
    let { name, value, dataset } = e.target;
    if (!list) {
      this.setState(() => ({
        ...this.state,
        model: {
          ...this.state.model,
          [name]: value
        }
      }));
    } else {
      let listCopy = JSON.parse(JSON.stringify(this.state.model[list]));
      listCopy[dataset.attr][name] = value;
      this.setState(() => ({
        ...this.state,
        model: {
          ...this.state.model,
          [list]: listCopy
        }
      }));
    }
  };

  onSave = () => {
    let { model } = this.state;

    TestCaseService.updateTestCase(this.projectId, model._id, model).then(
      () => {
        this.props.history.push({
          pathname: `/projects/${this.projectId}`
        });
      }
    );
  };

  onSaveExecution = () => {
    let { model } = this.state;
    model.testCaseId = model._id;
    delete model._id;
    TestCaseExecutionService.createTestCaseExecution(model).then(() => {
      this.props.history.push({
        pathname: `/projects/${this.projectId}/testExecutions/`
      });
    });
  };

  render() {
    let { mode, model } = this.state;
    return (
      <div className="animated fadeIn" id="test-case-detail">
        {mode === "edit" ? (
          <TestCaseDefinition
            toggleTooltip={value => this.toggleTooltip(value)}
            tooltipOpen={this.state.tooltipOpen}
            model={model}
            onSave={() => this.onSave()}
            onChange={(e, list) => this.onChange(e, list)}
            onAdd={list => this.onAdd(list)}
          />
        ) : mode === "read" ? (
          <TestCaseDetailReadMode model={model} />
        ) : (
          <TestCaseDetailRunMode
            model={model}
            onSave={() => this.onSaveExecution()}
            onChange={(e, list) => this.onChange(e, list)}
          />
        )}
      </div>
    );
  }
}

export default TestCaseDetail;
