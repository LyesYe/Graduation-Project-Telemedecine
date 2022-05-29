import React from 'react';

import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import CallThingies from '../../Components/call/CallThingies';
import Notifications from '../../Components/Notifictions/Notifications';
import { AppBar, Typography } from '@mui/material';


// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 100px',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '600px',
//     border: '2px solid black',

//     [theme.breakpoints.down('xs')]: {
//       width: '90%',
//     },
//   },
//   image: {
//     marginLeft: '15px',
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
//   },
// }));

const App = () => {
//   const classes = useStyles();

  return (
    <div>
      <VideoPlayer />
      <CallThingies>
        <Notifications />
      </CallThingies>
    </div>
  );
};

export default App;
