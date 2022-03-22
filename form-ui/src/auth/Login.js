import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from '../assets/Tabletlogin-rafiki.png';
import Button from '@mui/material/Button';
import './auth.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8000',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Sidebar() {
    return (
        <>
            <div className="logo" style={{ backgroundColor: 'aliceblue' }}>
                <div className='logoContainer'>
                    <img src={Logo} id="logo_image" />
                    <h3 id="title">Login to see  <br /> events near you</h3>

                </div>
            </div>
        </>
    )
}

function InputWithIcon({ setToken}) {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     function validateForm() {
         return username.length > 0 && password.length > 0;
     }
     function handleSubmit(e) {
         e.preventDefault();
     }
   
    return (
        <div className='Input'>
            <div></div>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <form onSubmit={handleSubmit}>
                <div>
                    <h3>LOG IN</h3>
                     <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Username
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                            type = "username"
                            value = { username}
                            onChange = { (e) => setUsername(e.target.value)}
                            
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="input-with-icon-adornment">
                            Password
                        </InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            type='password'
                            startAdornment={
                                <InputAdornment position="start">
                                    <PasswordIcon />
                                </InputAdornment>
                            }
                            value = {password}
                            onChange = { (e) => setPassword(e.target.value)}
                            
                        />
                    </FormControl>
                </div>
                <div id="btns">
                    <Link to = "/"style={{textDecoration:'none'}}><Button id='login-btn' variant="contained" disabled = {!validateForm()}>Log In</Button></Link>
                    <Button style={{ marginTop: '10px', marginLeft: '5px' }} variant="outlined">Sign up</Button>
                </div>
                <p style={{ fontSize: 'x-small' }}> <a href='#' style={{ color: 'red' }}>Forgot password?</a></p>
                </form>
            </Box>

        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default function Login() {
    return (
        <>
            <div className='boddy'>

                <div className='bodyContainer' >
                    <Sidebar />
                    <InputWithIcon />
                </div>
            </div>
        </>
    )
}
