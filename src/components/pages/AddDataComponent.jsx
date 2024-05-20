import React, { useState, useRef } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { showErrorAlert, showSuccessAlert } from '../../sweetAlert';

function AddDataComponent({ handleAddStudent }) {
  const [open, setOpen] = useState(false);
  const inputRefs = {
    first_name: useRef(),
    last_name: useRef(),
    email: useRef(),
    gender: useRef(),
    address: useRef(),
    contact_no: useRef(),
    dob: useRef()
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const newData = Object.keys(inputRefs).reduce((data, key) => {
      data[key] = inputRefs[key].current.value;
      return data;
    }, {});
    handleAddStudent(newData);
    handleClose();
    showSuccessAlert('Success', 'Student deleted successfully');
  };

  return (
    <Box display="flex" justifyContent="flex-end" mb={2}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Student
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="first_name"
            label="First Name"
            fullWidth
            variant="outlined"
            inputRef={inputRefs.first_name}
          />
          <TextField
            margin="dense"
            name="last_name"
            label="Last Name"
            fullWidth
            variant="outlined"
            required='true'
            inputRef={inputRefs.last_name}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            inputRef={inputRefs.email}
          />
          <TextField
            margin="dense"
            name="gender"
            label="Gender"
            fullWidth
            variant="outlined"
            inputRef={inputRefs.gender}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            fullWidth
            variant="outlined"
            inputRef={inputRefs.address}
          />
          <TextField
            margin="dense"
            name="contact_no"
            label="Contact No"
            fullWidth
            variant="outlined"
            inputRef={inputRefs.contact_no}
          />
          <TextField
            margin="dense"
            name="dob"
            label="DOB"
            fullWidth
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            inputRef={inputRefs.dob}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AddDataComponent;
