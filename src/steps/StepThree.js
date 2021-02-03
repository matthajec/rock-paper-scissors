import React, { useEffect, useState, useContext } from 'react';
import GameChoice from '../components/GameChoice';
import GameContext from '../context/GameContext';

export default function StepThree() {
  const { userChoice, step, enemy, reset } = useContext(GameContext);

  const winner = (userChoice, enemyChoice) => {
    if (userChoice === enemyChoice) {
      return 'tie';
    }

    //if player picked rock
    if (userChoice === 'rock') {
      if (enemyChoice === 'paper') {
        return 'enemy';
      }
      if (enemyChoice === 'scissors') {
        return 'user';
      }
    }

    // if player picker paper
    if (userChoice === 'paper') {
      if (enemyChoice === 'scissors') {
        return 'enemy';
      }
      if (enemyChoice === 'rock') {
        return 'user';
      }
    }

    // if player picked scissors
    if (userChoice === 'scissors') {
      if (enemyChoice === 'rock') {
        return 'enemy';
      }
      if (enemyChoice === 'paper') {
        return 'user';
      }
    }
  };

  const getWinnerMessage = (_winner) => {
    if (_winner === 'tie') return 'you tied';
    if (_winner === 'user') return 'you win';
    if (_winner === 'enemy') return 'you lose';
  };

  console.log(winner(userChoice.value, enemy.value));

  return (
    <>
      <p className="step-3_text">you picked</p>
      <p className="step-3_text">the house picked</p>
      <div className="step-3_results">
        <p className="step-3_text step-3_text_results">
          {getWinnerMessage(winner(userChoice.value, enemy.value))}
        </p>
        <button className="step-3_restart-btn" onClick={() => reset()}>Play Again</button>
      </div>
      <GameChoice type={userChoice.value} unclickable />
      <GameChoice type={enemy.value} />
    </>
  );
}