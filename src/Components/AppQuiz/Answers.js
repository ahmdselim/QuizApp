import React from "react";

const Answers = (props) => {
  const {
    answers,
    clicked,
    clickedAnswers,
    correctAnswers,
    score,
    questions,
  } = props;
  const answer = Object.keys(answers);
  const renderAnswers = () => {
    return answer.map((qAnswer, i) => (
      <li
        key={i}
        className={
          correctAnswers === qAnswer
            ? "correct"
            : clickedAnswers === qAnswer
            ? "incorrect"
            : ""
        }
        onClick={() => clicked(qAnswer)}
      >
        {answers[qAnswer]}
      </li>
    ));
  };
  return (
    <ul disabled={clickedAnswers ? true : false} className="answers">
      {renderAnswers()}
      <p className="answerEvaluation">
        {correctAnswers ? (
          <span role="img" aria-label="Fire">
            Correct Answers 😉
          </span>
        ) : clickedAnswers ? (
          <span role="img" aria-label="Fire">
            Incorrect Answers 😢
          </span>
        ) : (
          ""
        )}
      </p>
      <p className="result__answer">
        Your score {score} Of {Object.keys(questions).length}
      </p>
    </ul>
  );
};

export default Answers;
