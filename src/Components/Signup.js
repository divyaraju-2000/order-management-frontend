import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


const API ="http://localhost:4050";
function Copyright(props) {
    return (
      
        <div style={{textAlign:"center"}}>
  
        <b>
  
          <h5 style={{fontFamily:"serif"}}>A Little Progress, Each day adds up a big Results</h5>
        
        {new Date().getFullYear()}
        {'.'}
        </b>
        </div>
      
    );
  }
  
  const theme = createTheme();

const Signup = () => {
    const navigate = useNavigate();
const formik = useFormik({
    initialValues:{
        name:"",
        username:"",
        password:"",
    },
    onSubmit:(values) => {
            console.log("onSignup",values);
            navigate("/login")
    },
    
    
});

const registerUser = (values) => {
    fetch(`${API}/users/register`,{
        method:"POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify(values)
    })
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
    })
    .catch((error)=>{console.log(error)});
}
    return(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">

        <CssBaseline />
        <Box
          sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box   noValidate sx={{ mt: 1 }}>
            <form onSubmit ={formik.handleSubmit} >

            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-size-small"
              label="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              //   autoComplete="email"
              autoFocus
              />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              //   autoComplete="email"
              
              />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}

              //   autoComplete="current-password"
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => registerUser(formik.values)}
            >
              Sign Up
            </Button>
            
            </form>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
              
      </Container>
    </ThemeProvider>
    )
}

export default Signup;