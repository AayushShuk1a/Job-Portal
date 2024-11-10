import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Box, Card } from '@mui/material';

function SignUp() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const handleUsernameChange=(e)=>setUsername(e.target.value);
    const handlePasswordChange=(e)=>setPassword(e.target.value);
    const handleEmailChange=(e)=>setEmail(e.target.value);


    const handleSubmit=async()=>{
        if(!username||!email||!password){
            alert("please fill all the fields");
            return;
        }


        const userData={username,email,password};

        try{
            const response=await fetch('http://localhost:8080/users/signup',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(userData),
            })

            if(response.ok){
                alert("Sign up successfull, Please Login");
                setUsername('');
                setPassword('');
                setEmail('');
            }
        }catch(error){
            console.error('Error during sign up:', error);
            alert('An error occurred. Please try again.');
        }

        
    }
    

    return (
        <Container maxWidth="lg" sx={{ my: 5 }}>
            <Grid container spacing={2} sx={{ height: '100%', position: 'relative', alignItems: 'center' }}>
               
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <Card
                        sx={{
                            padding: 5,
                            flex: 1,
                            minHeight: '400px', 
                            boxShadow: 3, 
                            borderRadius: '16px', 
                            background: 'linear-gradient(135deg, #64b5f6, #1e88e5, #0d47a1)', 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white', 
                                p: '40px',
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                Welcome Back
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'center', mb: 3 }}>
                                Please login to continue your journey with us. We're glad to see you again!
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => window.location.href = '/login'}
                                sx={{
                                    background: 'linear-gradient(to right, #ffffff, #90caf9)', 
                                    color: '#0d47a1', 
                                    px: 5,
                                    mt: 2
                                }}
                            >
                                Login
                            </Button>
                        </Box>
                    </Card>
                </Grid>

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

                            <Typography variant="body1">Create your account</Typography>

                            {/* Username Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Username"
                                variant="outlined"
                                type="text"
                                onChange={handleUsernameChange}
                            />

                            {/* Email Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email address"
                                variant="outlined"
                                type="email"
                                onChange={handleEmailChange}
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

                            {/* Sign Up Button */}
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
                                Sign Up
                            </Button>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SignUp;
