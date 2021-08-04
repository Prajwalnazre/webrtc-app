import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { SocketContext } from '../SocketContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    },
    gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
    },
}));

const VideoPlayer = () => {

    const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } = useContext(SocketContext)
    const classes = useStyles();
    return (
        <Grid className={classes.gridContainer} container>
            {/* Own Video */} 
            {
                stream && (
                    <Paper className={classes.paper} >
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterbottom>
                                { name || 'Name'}
                            </Typography>
                            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                        </Grid> 
                    </Paper>
                )
            }
            {/* User's Video */}
            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterbottom>
                                { call.name || 'Name' }
                            </Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid> 
                    </Paper>
                )
            }
        </Grid>
    )
}

export default VideoPlayer
