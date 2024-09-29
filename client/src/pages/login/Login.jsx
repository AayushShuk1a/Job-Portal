import React from 'react';
import { Button, Container, Grid, TextField, Typography, Box, Link, Card } from '@mui/material';

function Login() {
    return (
        <Container maxWidth="lg" sx={{ my: 5 }}>
            <Grid container spacing={2} sx={{ height: '100%', position: 'relative', alignItems: 'center' }}>
                {/* Left Side - Sign In Card */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', zIndex: '5' }}>
                    <Card
                        sx={{
                            padding: 3,
                            backgroundColor: 'white',
                            flex: 1,
                            minHeight: '400px', // Decreased height for the sign-in card
                            boxShadow: 3, // Elevation
                            borderRadius: '16px', // Border radius
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center content vertically
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 5 }}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                alt="logo"
                                style={{ width: '160px' }} // Adjusted image size
                            />
                            <Typography variant="h4" sx={{ mt: 1, mb: 3 }}>
                                We are The Lotus Team
                            </Typography>

                            <Typography variant="body1">Please login to your account</Typography>

                            {/* Email Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email address"
                                variant="outlined"
                                type="email"
                            />

                            {/* Password Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Password"
                                variant="outlined"
                                type="password"
                            />

                            {/* Sign In Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    background: 'linear-gradient(to right, #2196F3, #21CBF3)', // Blue gradient
                                    color: 'white',
                                }}
                            >
                                Sign in
                            </Button>

                            <Link href="#" variant="body2" color="textSecondary">
                                Forgot password?
                            </Link>


                        </Box>
                    </Card>
                </Grid>


                {/* Right Side - Sign Up Card */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <Card
                        sx={{
                            padding: 5,
                            flex: 1,
                            minHeight: '500px', // Increased height for the sign-up card
                            boxShadow: 3, // Elevation
                            borderRadius: '16px', // Border radius
                            background: 'linear-gradient(135deg, #64b5f6, #1e88e5, #0d47a1)', // Blue gradient
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', // Center content vertically
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white', // Text color
                                p: '40px',
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Create an Account
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', mb: 3 }}>
                                Join us to start your journey! We're excited to have you here.
                            </Typography>

                            {/* Sign Up Button */}
                            <Button
                                variant="contained"
                                onClick={() => window.location.href = '/register'}
                                sx={{
                                    background: 'linear-gradient(to right, #ffffff, #90caf9)', // White to light blue gradient
                                    color: '#0d47a1', // Dark blue text color
                                    px: 5,
                                    mt: 2
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
}

export default Login;
