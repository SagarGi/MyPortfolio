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
    padding: theme.spacing(1),
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
        CONTACT ME
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle style = {{background: '#232a31'}}id="customized-dialog-title" onClose={handleClose}>
          <h2 className = "text font-weight-blod text-center display-5">CONTACT</h2>
          <hr className = "hrline1"></hr>
        </DialogTitle>
        <DialogContent>
          <Typography className = "text-white" gutterBottom>
           <p className = "textpara text-center font-weight-bold">+977 9829107652</p>
           <p className = "textpara text-center font-weight-bold">+977 9864893196</p>
           <p className = "textpara ml-4 mr-4 text-center font-weight-bold">Email : sagargurung1001@gmail.com</p>
          </Typography>
        </DialogContent>
        <DialogActions style = {{background: '#232a31'}}>
        </DialogActions>
      </Dialog>
      </div>
      
    </div>
  );
}