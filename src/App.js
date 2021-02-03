import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';
import RulesImg from './images/image-rules.svg';
import Game from './steps/Game';

const App = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <>
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
    </>
  );
};

export default App;