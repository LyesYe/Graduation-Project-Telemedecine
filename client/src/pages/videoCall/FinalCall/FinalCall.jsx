import React, { useContext, useEffect, useState } from "react";
import "./FinalCall.css";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import Notifications from "../../../Components/Notifictions/Notifications";
import CallThingies from "../../../Components/call/CallThingies";
import { SocketContext } from "../../../Context";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton, TextField } from "@mui/material";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
// import MicIcon from "@mui/icons-material/Mic";

const FinalCall = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  useEffect(() => {
    {
    }
  }, []);

  return (
    <div id="finalcallContainer">
      <div id="doss">sdsd</div>
      <div id="callContainer">
        <VideoPlayer id="first" />
        <div id="buttCall">
          <IconButton aria-label="mic">
            <MicIcon style={{ color: "green" }} />
          </IconButton>
          <IconButton aria-label="hang">
            <PhoneDisabledIcon style={{ color: "red" }} />
          </IconButton>
        </div>
        <CallThingies>
          <Notifications />
        </CallThingies>
      </div>

      {/* {me} */}
      {/* <VideoPlayer />
      <CallThingies>
        <Notifications />
      </CallThingies> */}
    </div>
  );
};

export default FinalCall;
