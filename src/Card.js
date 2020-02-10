import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './portfolio.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 180,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style = {{background: '#232a31'}} >
      <CardActionArea href = {props.href} target = {props.target}>
        <CardMedia
          className={classes.media}
          image = {props.image}
          
        />
        <CardContent>
            <p className = "textpara text-center font-weight-bold">{props.name}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}