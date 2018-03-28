import React from "react";

const MarioCard = props => (
  <div
    className="card"
    onClick={e => {
      props.validatePick(props.id);
    }}
  >
    <div className="img-frame">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MarioCard;