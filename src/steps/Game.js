import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default function ({ step }) {

  return (
    <div className={`game step-${step}`}>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo playerPick="rock" />}
      {step === 3 && <StepThree />}
    </div>
  );
}