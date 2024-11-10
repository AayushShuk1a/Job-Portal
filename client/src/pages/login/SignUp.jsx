import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, TextField, Typography, Box, Card } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {  login } from './API';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError,setpasswordError]=useState('');
    const navigate=useNavigate();


    const popularDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com'];
    const handleUsernameChange = (e) => { 
        const value = e.target.value;
        setUsername(value);
        const usernameRegex = /^[a-zA-Z0-9_]+$/;

        if (!usernameRegex.test(value)) {
            setUsernameError('Username can only contain letters, numbers, and underscores');
        } else {
            setUsernameError('');
        }

       
    }
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    useEffect(() => {

        

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email && emailRegex.test(email)) {
            setEmailError('');
        }
        const emailDomain = email.split('@')[1];
        if (popularDomains.includes(emailDomain)) {
            setEmailError('');
        } 

        if (password.length > 6) {
            setpasswordError("");
            return;
        }
    }, [username,email,password]);


    


    const handleSubmit = async () => {
        if (!username || !email || !password) {
            setError("please fill all the fields");
            return;
        }
        

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }


        const emailDomain = email.split('@')[1];
        if (!popularDomains.includes(emailDomain)) {
            setEmailError('Please use a popular email provider (e.g., Gmail, Outlook)');
        } else {
            setEmailError('');
        }

        if (password.length < 6) {
            setpasswordError("Password length should be 6+");
            return;
        }

        if (usernameError && emailError && passwordError){
            return;
        } 

        const userData = { username, email, password };

        try {
            const response = await fetch('http://localhost:8080/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            })

            if (!response.ok) {

                const errorMessage = await response.text();
                setError(errorMessage);
                return;
            }

            await login(username, password);

            if (response.ok) {
                navigate("/"); 
                setUsername('');
                setPassword('');
                setEmail('');
            }

           
        } catch (error) {
            setError(error);

        }


    }

    const handleClose = () => {
        setError("");
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
                            {error && <div style={{ backgroundColor: '#f8d0c8', width: '91%', padding: '0px 20px', marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '5px' }}>

                                <p style={{ color: '#896b66' }}>{error}</p>
                                <div
                                    onClick={handleClose}
                                    style={{
                                        cursor: 'pointer',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#ff5f56', // Red background for the circle
                                    }}
                                >
                                    <Close style={{ fontSize: '16px', color: 'white' }} />
                                </div>
                            </div>}

                            {/* Username Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Username"
                                variant="outlined"
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                error={!!usernameError}
                                helperText={usernameError}
                            />

                            {/* Email Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email address"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                error={!!emailError}
                                helperText={emailError}
                            />

                            {/* Password Input */}
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={handlePasswordChange}
                                error={!!passwordError}
                                helperText={passwordError}
                                value={password}
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
