import React, { useContext, useState } from "react";
import "./FinalCall.css";
import VideoPlayer from '../../../Components/VideoPlayer/VideoPlayer';
import Notifications from '../../../Components/Notifictions/Notifications';
import CallThingies from '../../../Components/call/CallThingies';
import { SocketContext } from "../../../Context";
import MicIcon from '@mui/icons-material/Mic';
import { TextField } from "@mui/material";
const FinalCall = () => {

  return (
    <div id="callContainer">
    
{/* <MicIcon  style={{ color: 'red' }}/>

<TextField id="standard-basic" label="Chercher Un patient" variant="standard" fullWidth /> */}

        {/* {me} */}
      {/* <VideoPlayer />
      <CallThingies>
        <Notifications />
      </CallThingies> */}
    </div>
  );
};

export default FinalCall;
