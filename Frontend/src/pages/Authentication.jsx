import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Snackbar,
  Alert,
  IconButton,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';

const theme = createTheme({
  shape: { borderRadius: 12 },
});

export default function Authentication() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      setError('');
      if (formState === 0) {
        let result=await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setFormState(0);
        setUsername('');
        setPassword('');
        setName('');
      }
    } catch (err) {
        console.log(err)
        setError(err?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div id="video-body">
    <ThemeProvider theme={theme}>
      <Grid container component="main" >
        <CssBaseline />
        <Grid item  component={Paper} elevation={10}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: "500px",
            }}
          >
            <Avatar sx={{ bgcolor: 'primary.main', mb: 1 }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography variant="h5" fontWeight={700}>
              {formState === 0 ? 'Welcome back' : 'Create an account'}
            </Typography>

            <Typography variant="body2" color="text.secondary" mb={3}>
              {formState === 0
                ? 'Sign in to continue'
                : 'Join us in just a few seconds'}
            </Typography>

            {/* Mode Switch */}
            <ToggleButtonGroup
              value={formState}
              exclusive
              onChange={(_, val) => val !== null && setFormState(val)}
              sx={{ mb: 3 }}
            >
              <ToggleButton value={0}>Sign In</ToggleButton>
              <ToggleButton value={1}>Sign Up</ToggleButton>
            </ToggleButtonGroup>

            {/* Form */}
            <Box sx={{ width: '75%' }}>
              {formState === 1 && (
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                fullWidth
                label="Username"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                fullWidth
                label="Password"
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {error && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {error}
                </Alert>
              )}

              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleAuth}
              >
                {formState === 0 ? 'Login' : 'Register'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </ThemeProvider>
  </div>
  );
}
