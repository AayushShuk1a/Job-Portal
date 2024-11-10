import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Box, Link, Card } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [username,setUsername]=useState   ("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleUsernameChange=(e)=>setUsername(e.target.value);
    const handlePasswordChange=(e)=>setPassword(e.target.value);


    const handleSubmit=async()=>{

        if(!username||!password){
            alert("Please enter details");
        }

        const loginData={username,password};

        try{

            const response=await fetch("http://localhost:8080/users/login",{
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(loginData),
            })
    
            if(response.ok){
                const token=await response.text();
                
                localStorage.setItem('authToken',token);
                alert("Login Success");
                navigate("/");
            }

        }catch(error){
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        }
        

    }


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
                            minHeight: '400px', 
                            boxShadow: 3, 
                            borderRadius: '16px', 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 5 }}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                alt="logo"
                                style={{ width: '160px' }} 
                            />
                            <Typography variant="h4" sx={{ mt: 1, mb: 3 }}>
                                We are The Lotus Team
                            </Typography>

                            <Typography variant="body1">Please login to your account</Typography>

                            {/* Username Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="username"
                                variant="outlined"
                                type="text"
                                onChange={handleUsernameChange}
                            />

                            {/* Password Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={handlePasswordChange}
                            />

                            {/* Sign In Button */}
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={handleSubmit}
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
                            minHeight: '500px', 
                            boxShadow: 3, 
                            borderRadius: '16px', 
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
