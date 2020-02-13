import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import './portfolio.css'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    
    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: '#232a31',
    
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
     background: '#232a31',
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
      <Button className = "textbutton"  variant="outlined" color="primary" onClick={handleClickOpen}>
        About Me
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle style = {{background: '#232a31'}}id="customized-dialog-title" onClose={handleClose}>
          <h2 className = "text font-weight-blod text-center display-4">ABOUT ME</h2>
          <hr className = "hrline1"></hr>
        </DialogTitle>
        <DialogContent>
          <Typography className = "text-white" gutterBottom>
            <p className = "textpara  font-weight-bold">Hey you ya you!</p>
            <p className = "textpara font-weight-bold">My name is Sagar Gurung and i am the final year student of BE in software. </p>
            <p className = "textpara font-weight-bold">This is my portfolio website where you can find me in detail.I am just an average introvert. My height is 6ft and 2 in. Beside programming i am a beginner musician trying to create music for my own life. Also i like cricket much than other sports.</p>
          </Typography>
        </DialogContent>
        <DialogActions style = {{background: '#232a31'}}>
          <Button autoFocus onClick={handleClose} className = "textbutton1" color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      
    </div>
  );
}