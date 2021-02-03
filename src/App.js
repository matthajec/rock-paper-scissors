import React from 'react';
import GameChoice from './components/GameChoice';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';
import RulesImg from './images/image-rules.svg';

const App = () => (
  <div>
    <Scoreboard />
    <Modal>
      <Modal.Wrapper>
        <Modal.Inner>
          <div className="flex-sb">
            <Modal.Title>rUlEs</Modal.Title>
            <Modal.CloseButton>X</Modal.CloseButton>
          </div>
          <Modal.Image src={RulesImg} alt="rules" />

        </Modal.Inner>
      </Modal.Wrapper>
      <Modal.ToggleButton>Rules</Modal.ToggleButton>
    </Modal>
  </div>
);

export default App;