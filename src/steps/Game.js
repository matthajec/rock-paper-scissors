import React, { useContext } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import GameContext from '../context/GameContext';

export default function () {
  const { step } = useContext(GameContext);


  return (
    <div className={`game step-${step.value}`}>
      {step.value === 1 && <StepOne />}
      {step.value === 2 && <StepTwo />}
      {step.value === 3 && <StepThree />}
    </div>
  );
}