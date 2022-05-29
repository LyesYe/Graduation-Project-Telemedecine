



//   return (

//   );
// };

// export default CallThingies;

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useContext } from 'react';
import { useState } from 'react';
import { SocketContext } from '../../Context';

const CallThingies = ({ children }) => {

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container>
    <Paper elevation={10} >
      <form  noValidate autoComplete="off">
        <Grid container >
          <Grid item xs={12} md={6} >
            <Typography gutterBottom variant="h6">Account Info</Typography>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            <div>
            hiiiiiiiiiiiiiiiiiiiiiic {name}
            </div>
            <CopyToClipboard text={me} >
              <Button variant="contained" color="primary" fullWidth startIcon={<AssignmentIcon fontSize="large" />}>
                Copy Your ID
              </Button>
            </CopyToClipboard>
          </Grid>
          <Grid item xs={12} md={6} >
            <Typography gutterBottom variant="h6">Make a call</Typography>
            <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" startIcon={<PhoneDisabledIcon fontSize="large" />} fullWidth onClick={leaveCall} >
                Hang Up
              </Button>
            ) : (
              <Button variant="contained" color="primary" startIcon={<LocalPhoneIcon fontSize="large" />} fullWidth onClick={() => callUser(idToCall)}>
                Call
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
      {children}
    </Paper>
  </Container>
  );
}

export default CallThingies;

