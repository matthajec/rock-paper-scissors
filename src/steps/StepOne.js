import React, { useContext } from 'react';
import GameChoice from '../components/GameChoice';
import GameContext from '../context/GameContext';

export default function StepOne() {
  const { userChoice, step } = useContext(GameContext);

  const next = choice => {
    userChoice.set(choice);
    step.set(2);
  };

  return (
    <>
      <GameChoice type="rock" onClick={() => next('rock')} />
      <GameChoice type="paper" onClick={() => next('paper')} />
      <GameChoice type="scissors" onClick={() => next('scissors')} />
    </>
  );
}