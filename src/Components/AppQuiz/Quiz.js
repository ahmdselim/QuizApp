import React, { useState } from "react";
import Answers from "./Answers";
import Questions from "./Questions";
import img from "../../images/Amr.jpg";

const Quiz = () => {
  const questions = {
    1: "What`s my name ?",
    2: "where do i work ?",
    3: "How old me ?",
  };
  const answers = {
    1: {
      1: "Ahmed",
      2: "Mohamed",
      3: "Ramy",
    },
    2: {
      1: "Royal Cup",
      2: "Brazilian Coffee House",
      3: " Not Work",
    },
    3: {
      1: 22,
      2: 50,
      3: 30,
    },
  };
  const rightAnswers = { 1: "1", 2: "2", 3: "1" };
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(1);
  const [clickedAnswers, setClickedAnswers] = useState(0);

  const clicked = (answer) => {
    if (answer === rightAnswers[step]) {
      setScore(score + 1);
      setClickedAnswers(answer);
      setCorrectAnswers(rightAnswers[step]);
    } else {
      setClickedAnswers(answer);
      setCorrectAnswers(0);
    }
  };

  const nextPage = () => {
    setStep(step + 1);
    setCorrectAnswers(0);
    setClickedAnswers(0);
  };

  const previousPage = () => {
    if (step > 1) {
      setStep(step - 1);
      setScore(score - 1);
    } else if (step === 1) {
      setStep(step);
      setScore(score - 1);
    }
    setCorrectAnswers(0);
    setClickedAnswers(0);
  };

  const renderQuiz = () => {
    return (
      <div className="content">
        {step <= Object.keys(questions).length ? (
          <>
            <Questions questions={questions[step]} />
            <Answers
              correctAnswers={correctAnswers}
              clicked={clicked}
              clickedAnswers={clickedAnswers}
              answers={answers[step]}
              questions={questions}
              score={score}
            />
            <button
              disabled={step > 1 ? false : true}
              onClick={() => previousPage()}
              className="previous"
            >
              Previous
            </button>
            <button
              disabled={clickedAnswers ? false : true}
              onClick={() => nextPage()}
              className="next"
            >
              Next
            </button>
          </>
        ) : (
          <>
            <h1>
              Now Your finish questions
              <span className="emoji" role="img" aria-label="Fire">
                😉
              </span>
            </h1>
            <p>
              Your Score : {score} Of {Object.keys(questions).length}
            </p>
            <div className="thank">
              <h2>
                Thanks Amr
                <span role="img" aria-label="Fire">
                  😀🙏🏼
                </span>
              </h2>
              <img className="thank__img" src={img} alt="thanks amr" />
              <p>
                Thank you very much eng. Amr. I really do not believe the level
                I have reached and God willing, for the better
                <span role="img" aria-label="Fire">
                  🥰😍
                </span>
                . and wish you the best in life and work , and congratulations
                to nearly 1,000 subscribers
                <span role="img" aria-label="Fire">
                  🥳🔥
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    );
  };
  return <>{renderQuiz()}</>;
};

export default Quiz;
