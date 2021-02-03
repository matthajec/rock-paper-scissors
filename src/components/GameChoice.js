import React from 'react';
import RockIcon from '../images/icon-rock.svg';
import PaperIcon from '../images/icon-paper.svg';
import ScissorsIcon from '../images/icon-scissors.svg';

const getIcon = type => {
  switch (type) {
    case 'rock':
      return RockIcon;
    case 'paper':
      return PaperIcon;
    case 'scissors':
      return ScissorsIcon;
  }
};

export default function GameChoice({ type, children, ...restProps }) {
  return (
    <div {...restProps} className={`game-choice game-choice_${type}`}>
      <div className={'game-choice_inner'}>
        <img className="game-choice_image" src={getIcon(type)} alt={type} />
      </div>
    </div>
  );
}

