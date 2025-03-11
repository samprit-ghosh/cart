import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '90%', // Added for better mobile responsiveness
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 2, // Added rounded corners for better aesthetics
};

function AuthModal() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ color: 'black', marginTop:"5px" }} // Changed text color and added bold font
      >
        Sign in
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {/* Render LoginForm or RegisterForm based on the current route */}
          {location.pathname === '/login' ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;