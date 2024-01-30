import { useState } from 'react';
import './App.css';
//Import images
import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';

const App = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [error, setError] = useState('');
  const [statement, setStatement] = useState('');

  const picks = ['rock', 'paper', 'scissors'];

  const computerPick = () => {
    const randomNum = Math.random() * 3;
    const index = Math.floor(randomNum);
    setComputerChoice(picks[index]);
  };

  const calculate = () => {
    console.log('Player:', userChoice, 'Computer:', computerChoice);
    if (userChoice === computerChoice) {
      setStatement(`Draw! You both choose ${userChoice}`);
    } else if (
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setStatement(
        `You Won!\n You choose: ${userChoice} & computer choose: ${computerChoice}`
      );
      setUserScore((prev) => prev + 1);
    } else {
      setStatement(
        `You lose!\n You choose: ${userChoice} & computer choose: ${computerChoice}`
      );
      setComputerScore((prev) => prev + 1);
    }
  };

  const onRPSSubmit = (e) => {
    e.preventDefault();
    setStatement('');
    setError('');

    if (userChoice === '') {
      return setError("You've not picked Rock, Paper or Scissors ");
    }
    computerPick();
    calculate();
  };

  const onReset = () => {
    setComputerScore(0);
    setUserScore(0);
    setError('');
    setStatement('');
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <h3>User: {userScore}</h3>
      <h3>Computer: {computerScore}</h3>
      <form onSubmit={onRPSSubmit}>
        <div className="rps">
          <div className="rock card" onClick={(e) => setUserChoice('rock')}>
            <img src={rock} alt="rock" />
          </div>
          <div className="paper card" onClick={(e) => setUserChoice('paper')}>
            <img src={paper} alt="paper" />
          </div>
          <div
            className="scissors card"
            onClick={(e) => setUserChoice('scissors')}
          >
            <img src={scissors} alt="scissors" />
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={onReset}>
            Reset
          </button>
        </div>
        <p>{statement}</p>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default App;
