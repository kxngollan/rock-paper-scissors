import React from "react";
import "./ResultModal.css";

import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";

const ResultModal = ({
  userScore,
  computerScore,
  statement,
  userChoice,
  computerChoice,
  onClose,
}) => {
  const uScore = userScore - 1;
  const cScore = computerScore - 1;

  return (
    <div className="modal">
      <div className="overlay" onClick={onClose}>
        {" "}
      </div>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <h1>{statement}</h1>
        <h2>Game Result</h2>
        <div className="chose">
          <div className="modal-card">
            <h3 className="title">Your Choice:</h3>
            <img
              src={
                userChoice === "rock"
                  ? rock
                  : userChoice === "paper"
                  ? paper
                  : scissors
              }
              alt={userChoice}
            />
          </div>
          <div className="modal-card">
            <h3 className="title">Computer Choice:</h3>
            <img
              src={
                computerChoice === "rock"
                  ? rock
                  : computerChoice === "paper"
                  ? paper
                  : scissors
              }
              alt={computerChoice}
            />
          </div>
        </div>
        <p>
          Your Score: {statement === "You Won!" ? `${uScore}+1!` : userScore}
        </p>
        <p>
          Computer: {statement === "You Lose!" ? `${cScore}+1!` : computerScore}
        </p>
      </div>
    </div>
  );
};

export default ResultModal;
