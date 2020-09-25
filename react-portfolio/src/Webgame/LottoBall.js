import React, { memo } from "react";
import "./LottoBall.css";

const LottoBall = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "blue";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "orange";
  } else {
    background = "green";
  }

  return (
    <div className="lottoball" style={{ background }}>
      {number}
    </div>
  );
});

export default LottoBall;
