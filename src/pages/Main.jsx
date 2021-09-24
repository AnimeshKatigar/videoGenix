import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import VideoPlayer from "./VideoPlayer";
import { SocketContext } from "../Socket";

import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";

import "../styles.css";
const Main = () => {
  // let history = useHistory();
  // let clientName=history.location.state.Name
  const { name, callAccepted, leaveCall, me, callUser, callEnded } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div>
      {/* {console.log(history)} */}
      <div style={{ display: "flex" }}>
        <div className="landingLeft">
          <h2 className="mainHeader">
            Hey{" "}
            <span className="highlightText" style={{ textTransform: "none" }}>
              {name}
            </span>
          </h2>
          <h3 className="secondaryTitle">
            We have generated an unique ID for you.
            <br /> Copy and share it
          </h3>
          <CopyToClipboard text={me}>
            <Button
              className="copyBtn"
              endIcon={<Assignment fontSize="large" />}
            >
              Copy Your ID
            </Button>
          </CopyToClipboard>
        </div>
        <div className="landingRight">
          <h3 className="callTitle">Make a Call</h3>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <div className="inputLabel">ID to call</div>
            <div>
              <input
                type="text"
                placeholder="Enter the ID..."
                onChange={(e) => setIdToCall(e.target.value)}
              />
            </div>
          </div>
          {callAccepted && !callEnded ? (
            <Button
              endIcon={<PhoneDisabled fontSize="large" />}
              onClick={leaveCall}
              className="hangupBtn"
            >
              Hang Up
            </Button>
          ) : (
            <Button
              className="callBtn"
              endIcon={<Phone fontSize="large" />}
              onClick={() => callUser(idToCall)}
            >
              Call
            </Button>
          )}
        </div>
      </div>
      <div>
        <VideoPlayer />
      </div>
    </div>
  );
};

export default Main;
