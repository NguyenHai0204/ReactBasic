import React from "react";

const Cell = (props) => {
  //Destructuring Object
  let { value, onClick,className } = props;

  return (
    <div className={`game-cell ${props.className}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
