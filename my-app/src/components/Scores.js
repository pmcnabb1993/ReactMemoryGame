import React from "react";

const Scores = props => (
  <div className="scoresDiv">
    <div>
      <p>
        Current score: <span className="scores">{props.score}</span>
      </p>
    </div>
    <div>
      <p>
        High score: <span className="scores">{props.topscore}</span>
      </p>
    </div>
  </div>
);

export default Scores;
