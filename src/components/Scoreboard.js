import React from 'react';

export default function Scoreboard({ score, ...restProps }) {
  return (
    <div className="scoreboard">
      <h1 className="scoreboard_title">rock paper scissors</h1>
      <div className="scoreboard_score">
        <p className="score_label">score</p>
        <p className="score_value">{score}</p>
      </div>
    </div>
  );
}