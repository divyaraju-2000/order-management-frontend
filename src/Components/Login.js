import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


const API ="http://localhost:4050";
function Copyright(props) {
  return (
    
    <div style={{textAlign:"center"}}>

      <b><i>

        <h5>Sign out of the past and sign in as new!!</h5>
      
      {new Date().getFullYear()}
      {'.'}
      </i></b>
      </div>
    
    );
  }
  
  const theme = createTheme();
  
  export default function Login() {
  const navigate = useNavigate();
  const [color,setColor] = useState("primary");
  const [status,setStatus] = useState("Sign in");
  const formik = useFormik({
    initialValues:{
        username:"",
        password:""
    },
    onSubmit:(values)=>{
        console.log("onLogin",values);
      
    },
  });

 


  const onLogin = async (userData) => {
    const data = await fetch(`${API}/users/signin`,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(userData)
      
    })
    
    if(data.status === 404 ||  data.status ===401){
        setColor("error");
        setStatus("Retry");
        console.log(data);
    }
    else{
      const user = await data.json();
        console.log(user);
        localStorage.setItem("access_token",user.token)
        localStorage.setItem("isAdmin",user.isAdmin)
        localStorage.setItem("user",formik.values.username)

       navigate("/cards");

         //getting carts data
      

    }
  };


  return (
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box   noValidate sx={{ mt: 1 }}>
            <form onSubmit ={formik.handleSubmit} >
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
              autoFocus
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
              color ={color}
              sx={{ mt: 3, mb: 2 }}
              onClick ={() => onLogin(formik.values)}
            >
              {status}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            </form>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
              
      </Container>
    </ThemeProvider>
  );
}