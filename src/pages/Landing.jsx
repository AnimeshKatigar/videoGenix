import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import imga from "../assets/image.svg";
import "../styles.css";

const Landing = () => {
  const [name, setName] = useState("");
  const location = {
    pathname: "/call",
    state: { Name: name },
  };
  let history = useHistory();
  const handleClick = () => {name.length!==0 && history.push(location)};
  return (
    <div style={{ display: "flex" }}>
      <div className="landingLeft">
        <h2 className="mainHeader">
          Have a <span className="highlightText">PRIVATE</span> <br /> video
          call and no one will ever know
        </h2>
        <h3 className="secondaryTitle">
          Premium quality video call protected <br /> with a unique ID and free
          for everyone
        </h3>
        <h3 className="startTitle">START YOUR CALL</h3>
        <div style={{ display: "flex",marginTop: "15px"}}>
          <div className="inputLabel">Name</div>
          <div>
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={name.length!==0 ? "proceedBtn" : "proceedDisabled"} onClick={handleClick} style={name.length!==0 ? {cursor:'pointer'} : {cursor:"not-allowed"}}>
          Proceed
        </div>
      </div>
      <div className="landingRight">
        <img src={imga} alt="s" />
      </div>
    </div>
  );
};

export default Landing;
