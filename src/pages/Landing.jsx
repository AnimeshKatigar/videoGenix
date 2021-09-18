import React from "react";
import imga from "../assets/image.svg";
import "../styles.css";

const Landing = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="landingLeft">
        <h2 className="mainHeader">
          Have a <span className="highlightText">PRIVATE</span> video call and
          no one will ever know
        </h2>
        <h3 className="secondaryTitle">
          Premium quality video call protected with a unique ID and free for
          everyone
        </h3>
        <h3 className="startTitle">START YOUR CALL</h3>
        <div style={{ display: "flex" }}>
            <div className="inputLabel">Name</div>
            <div><input type="text" placeholder="Enter your name..."/></div>
        </div>
        <div className="proceedBtn">
            Proceed
        </div>
      </div>
      <div>
        <img src={imga} alt="s" />
      </div>
    </div>
  );
};

export default Landing;
