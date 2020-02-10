import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AboutMe from './AboutMe.js';
import MyProject from './MyProject';
import Contact from './Contact';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: 'auto',
      marginTop: 20
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className = "container-fluid row mt-4">
            <div className = "col-sm text-center">
            {/* <Button className = "textbutton"  variant="outlined" color="primary">About me</Button> */}
            <AboutMe />
            </div>
            <div className = "col-sm text-center">
            {/* <Button className = "textbutton"  variant="outlined"  color="primary">My Projects</Button> */}
            <MyProject />
            </div>
            <div class = "col-sm text-center">
            {/* <Button className = "textbutton"  variant="outlined"  color="primary">Contacts</Button> */}
            <Contact />
            </div>
        </div>
    </div>
  );
}