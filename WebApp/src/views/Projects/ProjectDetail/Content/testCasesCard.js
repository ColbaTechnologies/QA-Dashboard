import React, { Fragment } from "react";
import { Col, Row, ListGroupItem } from "reactstrap";
import { CardDataList } from "../../../../components/CardDataList/cardDataList";
import { getColorByStatus } from "../../helpers";

export const TestCasesCard = ({
  createTestCase,
  testCaseSelected,
  selectTestCase,
  deleteTestCase,
  testCasesSelected,
  projectId,
  isExecution,
  buttonText,
  goToTestExecution,
  onFilterChange
}) => {
  return (
    <CardDataList
      title="Test Cases"
      buttonText={buttonText}
      onFilterChange={filter => onFilterChange(filter)}
      addValueTolist={createTestCase ? () => createTestCase() : null}
    >
      {() => {
        return (
          <div className="testList">
            {testCasesSelected.map(testCase => (
              <ListGroupItem
                key={testCase._id}
                tag="a"
                color={getColorByStatus(testCase.currentStatus)}
                action
                active={testCaseSelected === testCase._id}
              >
                <Row>
                  <Col
                    xs="10"
                    className="listItem"
                    onClick={() => selectTestCase(testCase._id, "read")}
                  >
                    <h5>{testCase._id}</h5>
                  </Col>
                  <Col xl="2" className="editBox">
                    {!isExecution ? (
                      <Fragment>
                        <i
                          className="cui-pencil icons font-3xl d-block mt-2"
                          onClick={() => selectTestCase(testCase._id, "edit")}
                        />
                        <i
                          className="cui-trash icons font-3xl d-block mt-2"
                          onClick={() => deleteTestCase(testCase._id)}
                        />
                      </Fragment>
                    ) : (
                      <Fragment>
                        <i
                          className="cui-task icons font-3xl d-block mt-2"
                          onClick={() => selectTestCase(testCase._id, "run")}
                        />
                        <i
                          className="cui-list icons font-3xl d-block mt-2"
                          onClick={() => goToTestExecution(testCase._id)}
                        />
                      </Fragment>
                    )}
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </div>
        );
      }}
    </CardDataList>
  );
};
