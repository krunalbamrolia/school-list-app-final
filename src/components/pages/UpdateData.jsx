
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

function UpdateData({ open, handleClose, student, handleUpdateStudent }) {
  const [updatedStudent, setUpdatedStudent] = useState(student);

  useEffect(() => {
    setUpdatedStudent(student);
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    handleUpdateStudent(updatedStudent);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Student</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="First Name"
          name="first_name"
          value={updatedStudent?.first_name || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Last Name"
          name="last_name"
          value={updatedStudent?.last_name || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Contact No"
          name="contact_no"
          value={updatedStudent?.contact_no || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          value={updatedStudent?.email || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Gender"
          name="gender"
          value={updatedStudent?.gender || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Address"
          name="address"
          value={updatedStudent?.address || ''}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="DOB"
          name="dob"
          value={updatedStudent?.dob || ''}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateData;
