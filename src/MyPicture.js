import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: 'auto',
      marginTop: 50,
      marginBottom: 60
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Sagar Gurung" src={require("./images/sagar.jpg")} className={classes.large} />
    </div>
  );
}