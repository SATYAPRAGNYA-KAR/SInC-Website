import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import './LoginApp.css';

import Header from "./Navbar";
import Footer from "./LoginFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  return fetch('https://shivamjain123.pythonanywhere.com/api/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Signin() {
  const classes = useStyles();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/profile";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <div className="loginapp">
    <Header />
    <div container className="loginbody">
        <div className='loginbody__box'>
      {/* <CssBaseline /> */}
      {/* <Header/> */}
      {/* <Grid item xs={false} md={7} className={classes.image} /> */}
      {/* <Grid item xs={12} md={5} component={Paper} elevation={6} square> */}
        {/* <div className={classes.paper}> */}
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <div className="loginbody__box__title">Login</div>
          <div className="loginbody__box__content">
            {/* <form className={classes.form} noValidate onSubmit={handleSubmit}> */}
            <form className="loginbody__box__content__form" noValidate onSubmit={handleSubmit}>
              <label
                className="loginbody__box__content__form__label1"
                for="username"
              >
                E-Mail:
              </label>
              <input 
                className="loginbody__box__content__input__username"
                placeholder="abc@123"
                style={{
                  width: "15vw",
                  height: "3.5vh",
                  marginLeft: "3.1vw",
                  marginBottom: "2vh",
                }}
                // variant="outlined"
                // margin="normal"
                // required
                // fullWidth
                id="email"
                name="email"
                label="Email Address"
                onChange={e => setUserName(e.target.value)}
              />
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                onChange={e => setUserName(e.target.value)}
              /> */}
              <br />
              <label
                className="loginbody__box__content__form__label2"
                for="password"
              >
                Password:
              </label>
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              /> */}
              <input
                className="loginbody__box__content__input__password"
                placeholder="******"
                style={{ width: "15vw", height: "3.5vh", marginLeft: "1vw" }}
                // variant="outlined"
                // margin="normal"
                // required
                // fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <div className="loginbody__box__bottom">
                <div className="loginbody__box__bottom__left">
                  <input
                    type="checkbox"
                    className="loginbody__box__bottom__left__checkbox"
                    name="remember"
                    value="remember"
                  />
                  <label
                    className="loginbody__box__bottom__left__checkbox__label"
                    for="remember"
                  >
                    Remember Me
                  </label>
                  <br />
                  <a
                    href="#0"
                    className="loginbody__box__bottom__left__forget"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <i>Forgot Password?</i>
                  </a>
                </div>
                <div className="loginbody__box__bottom__right">
                  <button
                    type="submit"
                    // fullWidth
                    // variant="contained"
                    // color="primary"
                    // className={classes.submit}
                    className="loginbody__box__bottom__right__button" 
                    style = {{
                      backgroundColor: "rgb(49, 154, 150)",
                      color: "#ffffff",
                      borderRadius: "2vh",
                      cursor: "pointer",
                      fontSize: "1.5em",
                      padding: "2vh 2vw 2vh 2vw"
                    }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            </div>

        {/* </div> */}
      {/* </Grid> */}
      </div>
    </div>
    <Footer/>
    </div>
  );
}