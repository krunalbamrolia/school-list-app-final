import React from 'react';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Typography, Avatar, Card, CardContent, CardActions } from '@mui/material';

function ViewData({ open, handleClose, student }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent>
        {student && (
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    src="https://www.alaska.edu/_resources/images/placeholders/profile.png"
                    alt="Profile"
                    sx={{ width: 100, height: 100 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{student.id}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>First Name:</strong> {student.first_name}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Last Name:</strong> {student.last_name}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Gender:</strong> {student.gender}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Email:</strong> {student.email}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Contact No:</strong> {student.contact_no}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Address:</strong> {student.address}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.2rem' }}><strong>Date of Birth:</strong> {student.dob}</Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button onClick={handleClose} color="primary" variant="contained">Close</Button>
            </CardActions>
          </Card>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ViewData;
