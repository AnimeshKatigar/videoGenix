import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  let history = useHistory();
  let clientName=history.location.state.Name
  return (
    <div>
        {console.log(history)}
      <div style={{ display: "flex" }}>
        <div className="landingLeft">
          <h2 className="mainHeader">
            Hey <span className="highlightText" style={{textTransform:"none"}}>{clientName}</span>
          </h2>
          <h3 className="secondaryTitle">
            We have generated an unique ID for you. Copy and share it
          </h3>
        </div>
        <div className="landingRight">
          <h3 className="callTitle">Make a Call</h3>
          <div style={{ display: "flex" }}>
            <div className="inputLabel">ID to call</div>
            <div>
              <input type="text" placeholder="Enter the ID..." />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
