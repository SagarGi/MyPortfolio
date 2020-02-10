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
import Card from './Card';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    
    
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
        My Project
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle style = {{background: '#232a31'}}id="customized-dialog-title" onClose={handleClose}>
          <h2 className = "text font-weight-blod text-center display-4">  SOME PROJECTS OF MINE  </h2>
          <hr className = "hrline1"></hr>
        </DialogTitle>
        <DialogContent>
            <div className = "container-fluid">
            <div className = "row">
              <div className = "col-sm ml-5">
                    <Card name = "BMI Mobile App" href = "https://github.com/SagarGi/BMI" target="_blank" image = {require("./images/java.png")} />
              </div>
              <div className = "col-sm">
                    <Card name = "FOODHut"  href = "https://github.com/SagarGi/FOODHut" target="_blank" image = {require("./images/java.png")} />
              </div>
          </div>
          <div className = "row mt-5">
              <div className = "col-sm ml-5">
                    <Card name = "DES Implemen.." href = "https://github.com/SagarGi/DESImplementation" target="_blank" image = {require("./images/java.png")}/>
              </div>
              <div className = "col-sm">
                    <Card name = "AR System" href = "https://github.com/SagarGi/AR-System" target="_blank"  image = {require("./images/java.png")}/>
              </div>
          </div>
        </div>
         <section>
             <div className = "text-center">
             <Button className = "textbutton mt-5 font-weight-bold"  href = "https://github.com/SagarGi"  target="_blank" variant="outlined"  color="primary">More Projects</Button>
             </div>
         </section>
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