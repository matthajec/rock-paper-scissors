import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';
import RulesImg from './images/image-rules.svg';
import Game from './steps/Game';
import GameContext from './context/GameContext';

const App = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [enemy, setEnemy] = useState(null);

  const reset = () => {
    setStep(1);
    setUserChoice(null);
    setEnemy(null);
  };

  return (
    <GameContext.Provider value={{
      step: {
        set: setStep,
        value: step
      },
      score: {
        set: setScore,
        value: score
      },
      userChoice: {
        set: setUserChoice,
        value: userChoice
      },
      enemy: {
        set: setEnemy,
        value: enemy
      },
      reset: reset
    }}>
      <Scoreboard score={score} />
      <Modal>
        <Modal.Wrapper>
          <Modal.Inner>
            <div className="flex-sb">
              <Modal.Title>rules</Modal.Title>
              <Modal.CloseButton />
            </div>
            <Modal.Image src={RulesImg} alt="rules" />

          </Modal.Inner>
        </Modal.Wrapper>
        <Modal.ToggleButton>Rules</Modal.ToggleButton>
      </Modal>
      <Game step={step} />
    </GameContext.Provider>
  );
};

export default App;