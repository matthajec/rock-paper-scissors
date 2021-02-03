import React, { useEffect, useState, useContext } from 'react';
import GameChoice from '../components/GameChoice';
import GameContext from '../context/GameContext';

export default function StepThree() {
  const { userChoice, step, enemy, reset, score } = useContext(GameContext);
  const [resultsMessage, setResultsMessage] = useState('');

  useEffect(() => {

    // determine the winner
    const getWinner = () => {
      if (userChoice.value === enemy.value) {
        return 'tie';
      }

      //if player picked rock
      if (userChoice.value === 'rock') {
        if (enemy.value === 'paper') {
          score.set(current => current - 1);
          return 'enemy';
        }
        if (enemy.value === 'scissors') {
          score.set(current => current + 1);
          return 'user';
        }
      }

      // if player picker paper
      if (userChoice.value === 'paper') {
        if (enemy.value === 'scissors') {
          score.set(current => current - 1);
          return 'enemy';
        }
        if (enemy.value === 'rock') {
          return 'user';
        }
      }

      // if player picked scissors
      if (userChoice.value === 'scissors') {
        if (enemy.value === 'rock') {
          score.set(current => current - 1);
          return 'enemy';
        }
        if (enemy.value === 'paper') {
          score.set(current => current + 1);
          return 'user';
        }
      }
    };

    // get the message sent to the user
    const getResultsMessage = (winner) => {
      if (winner === 'tie') return 'you tied';
      if (winner === 'user') return 'you won';
      if (winner === 'enemy') return 'you lost';
    };

    setResultsMessage(getResultsMessage(getWinner()));
  }, []);

  return (
    <>
      <p className="step-3_text">you picked</p>
      <p className="step-3_text">the house picked</p>
      <div className="step-3_results">
        <p className="step-3_text step-3_text_results">{resultsMessage}</p>
        <button className="step-3_restart-btn" onClick={() => reset()}>Play Again</button>
      </div>
      <GameChoice type={userChoice.value} unclickable />
      <GameChoice type={enemy.value} unclickable />
    </>
  );
}