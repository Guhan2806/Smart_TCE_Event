import React from "react";
import "./welcome.css";

function Welcome() {
  const name = "Annie";
  return (
    <div className="cont">
      <h5>Welcome {name}!!!</h5>
    </div>
  );
}

export default Welcome;
