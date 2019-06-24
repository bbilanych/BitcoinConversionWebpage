import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialogSlide = ({open, onModalClose}) => {
  const [value, setValue] = React.useState('');
  const onAcceptClick = () => {
    localStorage.name = value;
    onModalClose(false)
  };

  const onChangeInput = (e) => {
   setValue(e.target.value)
  };

  const checkDisabled = value.trim() === '';

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Please introduce yourself before you continue!"}</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            value={value}
            onChange={onChangeInput}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onAcceptClick} color="primary" disabled={checkDisabled}>
            OK!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogSlide;
