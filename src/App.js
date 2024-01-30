import React, { useState } from 'react';
import './App.css';
import ResultModal from './ResultModal';
import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';
import './ResultModal.css'; // Import the modal styles

const App = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [error, setError] = useState('');
  const [statement, setStatement] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const picks = ['rock', 'paper', 'scissors'];

  const computerPick = () => {
    const randomNum = Math.random() * 3;
    const index = Math.floor(randomNum);
    setComputerChoice(picks[index]);
  };

  const calculate = () => {
    if (userChoice === computerChoice) {
      setStatement(`Draw`);
    } else if (
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setStatement(
        `You Won!`
      );
      setUserScore((prev) => prev + 1);
    } else {
      setStatement(
        `You Lose!`
      );
      setComputerScore((prev) => prev + 1);
    }
  };

  const onRPSSubmit = (e) => {
    e.preventDefault();
    setStatement('');
    setError('');

    if (userChoice === '') {
      return setError("You've not picked Rock, Paper, or Scissors ");
    }
    computerPick();
    calculate();
    setModalOpen(true); // Open the modal after calculating results
  };

  const onReset = () => {
    setComputerScore(0);
    setUserScore(0);
    userChoice("")
    setError('');
    setStatement('');
  };

  return (
    <div className='main'>
      <h1>Rock, Paper, Scissors</h1>
      <h3>Your score: {userScore}</h3>
      <h3>Computer: {computerScore}</h3>
      {error ?
        <div className="error">
        <p>{error}</p>
      </div>:""}
      <form onSubmit={onRPSSubmit}>
        <div className="rps">
          <div className="rock card" onClick={() => setUserChoice('rock')}>
            <img src={rock} alt="rock" />
            <h4>Rock</h4>
          </div>
          <div className="paper card" onClick={() => setUserChoice('paper')}>
            <img src={paper} alt="paper" />
            <h4>Paper</h4>
          </div>
          <div
            className="scissors card"
            onClick={() => setUserChoice('scissors')}
          >
            <img src={scissors} alt="scissors" />
            <h4>Scissors</h4>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={onReset}>
            Reset
          </button>
        </div>
      </form>

      {modalOpen && (
        <ResultModal
          userScore={userScore}
          computerScore={computerScore}
          statement={statement}
          computerChoice={computerChoice}
          userChoice={userChoice}
          onClose={() => {setUserChoice(""); setModalOpen(false)}}
        />
      )}
    </div>
  );
};

export default App;
