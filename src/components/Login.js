import { Alert, Avatar, Card, CardContent, Button, TextField, Box, Typography, Grid } from '@mui/material'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <CardContent>
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <PersonOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log In
                        </Typography>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                inputRef={emailRef}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={passwordRef}
                            />
                            <Button
                                disabled={loading}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }} type="submit">
                                Sign Up
                            </Button>
                            <Grid item>
                                Need an account? <Link to="/signup">Sign Up </Link>
                            </Grid>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
