import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { TextField, Button, Typography, Box, CircularProgress, Container, Paper } from '@mui/material';

const firebaseConfig = {
  apiKey: "AIzaSyAqfJN22AYzDo0M08UJqGf5y1j_sEcpoVM",
  authDomain: "camp-code-auth.firebaseapp.com",
  projectId: "camp-code-auth",
  storageBucket: "camp-code-auth.appspot.com",
  messagingSenderId: "55915909282",
  appId: "1:55915909282:web:eb8ade8b7e91dd8019c7fb",
  measurementId: "G-2NKF6W8K1T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Box mt={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Login'}
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
