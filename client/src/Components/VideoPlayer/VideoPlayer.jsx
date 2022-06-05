import { Grid, Paper, Typography } from '@mui/material';
import React, { useRef,useContext,useEffect } from 'react';

import { SocketContext } from '../../Context';

import './VideoPlayer.css';



// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: '550px',
//     [theme.breakpoints.down('xs')]: {
//       width: '300px',
//     },
//   },
//   gridContainer: {
//     justifyContent: 'center',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   paper: {
//     padding: '10px',
//     border: '2px solid black',
//     margin: '10px',
//   },
// }));

const VideoPlayer = () => {
  const { name, callAccepted, userVideo, callEnded, stream, call,setStream } = useContext(SocketContext);
  const myVideo = useRef();
useEffect(() => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
}, []);





  return (
    <Grid container className='gridContainer' >
      
        <Paper  className='paper'>
          <Grid item xs={12} md={6} >
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay  className='video'/>
          </Grid> 
        </Paper>
      
      {callAccepted && !callEnded && (
        <Paper className='paper'>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className='video' />
          </Grid>
        </Paper>
       )} 
    </Grid>
  );
};

export default VideoPlayer;



