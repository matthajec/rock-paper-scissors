import React from 'react';
import GameChoice from '../components/GameChoice';

export default function StepOne() {
  return (
    <>
      <GameChoice type="rock" />
      <GameChoice type="paper" />
      <GameChoice type="scissors" />
    </>
  );
}