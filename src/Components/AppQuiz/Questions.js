import React from "react";

const Questions = (props) => {
  const { questions } = props;
  const renderQuestions = () => {
    return questions;
  };
  return <div className="question">{renderQuestions()}</div>;
};

export default Questions;
