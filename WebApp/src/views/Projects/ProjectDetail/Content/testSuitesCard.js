import React from "react";
import { CardDataList } from "../../../../components/CardDataList/cardDataList";
import { TestSuiteModal } from "./testSuiteModal";
import {
  Badge,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

export const TestSuitesCard = ({
  toggleModal,
  testSuites,
  modal,
  createTestSuite,
  testSuiteSelected,
  selectTestSuite,
  buttonText,
  onFilterChange
}) => {
  return (
    <CardDataList
      title="Test Suits"
      buttonText={buttonText}
      addValueTolist={() => toggleModal()}
      onFilterChange={filter => onFilterChange(filter)}
    >
      {() => {
        return (
          <div className="testList">
            {testSuites.map(testSuite => {
              let passed = testSuite.testCases.filter(
                item => "pass" === item.currentStatus
              );
              return (
                <ListGroupItem
                  key={testSuite._id}
                  action
                  active={testSuiteSelected === testSuite._id}
                  onClick={() => selectTestSuite(testSuite._id)}
                >
                  <ListGroupItemHeading>
                    {testSuite.name}
                    <Badge className="mr-1" color="primary">
                      {passed.length + "/" + testSuite.testCases.length}
                    </Badge>
                  </ListGroupItemHeading>
                  <ListGroupItemText>{testSuite.description}</ListGroupItemText>
                </ListGroupItem>
              );
            })}

            <TestSuiteModal
              modal={modal}
              toggleModal={() => toggleModal()}
              createTestSuite={data => createTestSuite(data)}
            />
          </div>
        );
      }}
    </CardDataList>
  );
};
