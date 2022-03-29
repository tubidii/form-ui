import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";

export default function LandingHeader() {
  return (
    <Box sx={{flexGrow: 1, boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
      <AppBar color={"transparent"} sx={{boxShadow:"none"}} position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            te
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            FormBuzz
          </Typography>
          <Link exact to='/login' style={{ textDecoration:'none'}}>
            <Button variant={'contained'} style={{marginRight:"2rem"}} color={"primary"} component={'a'} size="small">Login</Button>
          </Link>
          <Link exact to='/sign-up' style={{ textDecoration:'none'}}>
            <Button variant={'outlined'} color={"primary"} component={'a'} size="small">Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
