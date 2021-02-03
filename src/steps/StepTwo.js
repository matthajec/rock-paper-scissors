import React, { useEffect, useState, useContext } from 'react';
import GameChoice from '../components/GameChoice';
import GameContext from '../context/GameContext';

export default function StepTwo() {
  const { userChoice, step, enemy } = useContext(GameContext);

  const getRandomType = () => {
    const randomInt = Math.floor(Math.random() * 3) + 1;

    switch (randomInt) {
      case 1:
        return 'rock';
      case 2:
        return 'paper';
      default:
        return 'scissors';
    }
  };

  useEffect(() => {
    const type = getRandomType();

    const setEnemyTimeout = setTimeout(() => {
      enemy.set(type);

      setTimeout(() => {
        step.set(3);
      }, 1000);
    }, 4000);

    return () => clearTimeout(setEnemyTimeout);
  }, []);

  return (
    <>
      <p className="step-2_text">you picked</p>
      <p className="step-2_text">the house picked</p>
      <GameChoice type={userChoice.value} unclickable />
      {enemy.value ? <GameChoice type={enemy.value} /> : <GameChoice.Fake />}
    </>
  );
}