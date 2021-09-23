import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import VideoPlayer from "./VideoPlayer"
import { SocketContext } from '../Socket';

const Main = () => {
  
  // let history = useHistory();
  // let clientName=history.location.state.Name
  const { name } = useContext(SocketContext);

  return (
    <div>
        {/* {console.log(history)} */}
      <div style={{ display: "flex" }}>
        <div className="landingLeft">
          <h2 className="mainHeader">
            Hey <span className="highlightText" style={{textTransform:"none"}}>{name}</span>
          </h2>
          <h3 className="secondaryTitle">
            We have generated an unique ID for you.<br/> Copy and share it
          </h3>
        </div>
        <div className="landingRight">
          <h3 className="callTitle">Make a Call</h3>
          <div style={{ display: "flex",marginTop:"10px" }}>
            <div className="inputLabel">ID to call</div>
            <div>
              <input type="text" placeholder="Enter the ID..." />
            </div>
          </div>
        </div>
      </div>
      <div>
        <VideoPlayer/>
      </div>
    </div>
  );
};

export default Main;
