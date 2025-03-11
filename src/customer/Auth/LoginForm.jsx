import React from 'react';
import { TextField, Grid, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Added for navigation

function LoginForm() {
    const navigate = useNavigate(); // Initialize navigate for routing

    const handleLogin = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Create a FormData object from the form
        const data = new FormData(event.currentTarget);

        // Extract the form data
        const usersData = {
            email: data.get("email"),
            password: data.get("password"),
        };

        // Log the extracted user data
        console.log(`Email: ${usersData.email}\nPassword: ${usersData.password}`);
    };

    return (
        <Container maxWidth="sm" sx={{ padding: { xs: 2, sm: 3 }, marginTop: 4 }}>
            <form onSubmit={handleLogin}>
                <Grid container spacing={3}>
                    {/* Email Field */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                            type="email"
                        />
                    </Grid>

                    {/* Password Field */}
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="current-password"
                            type="password"
                        />
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                                padding: "0.8rem 0",
                                width: "100%",
                                backgroundColor: "#9155FD",
                                '&:hover': { backgroundColor: '#7E4BD7' }, // Added hover effect
                            }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Register Prompt */}
            <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: 3 }}>
                <Typography variant="body1" sx={{ marginRight: 1 }}>
                    If you don't have an account?
                </Typography>
                <Button
                    onClick={() => navigate("/register")} // Navigate to the register page
                    size="small"
                    sx={{ color: '#9155FD', fontWeight: 'bold' }}
                >
                    Register
                </Button>
            </Grid>
        </Container>
    );
}

export default LoginForm;