import React from 'react';
import GameChoice from '../components/GameChoice';

export default function StepOne() {
  return (
    <>
      <GameChoice type="paper" />
      <GameChoice type="scissors" />
      <GameChoice type="rock" />
    </>
  );
}