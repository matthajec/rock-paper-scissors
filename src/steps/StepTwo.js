import React, { useEffect, useState } from 'react';
import GameChoice from '../components/GameChoice';

export default function StepOne({ playerPick }) {
  const [enemy, setEnemy] = useState(<GameChoice.Fake />);

  useEffect(() => {
    setTimeout(() => {
      setEnemy(<GameChoice type="paper" />);
    }, 4000);
  }, []);

  return (
    <>
      <p className="step-2_text">you picked</p>
      <p className="step-2_text">the house picked</p>
      <GameChoice type={playerPick} unclickable />
      {enemy}
    </>
  );
}