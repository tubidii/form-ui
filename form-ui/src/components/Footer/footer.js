import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme,  } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';




const Theme = createTheme({
    p:{
        fontWeight:'60px',
    },
    h5:{
        textAlign:'center'
    }
});

export default function Footer() {
  return (
    <Box theme ={Theme} sx={{ width: '100%', ml:2, backgroundColor: 'lavender' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <div style={{ width:"80%"}}>
                <h2 style={{textAlign:'center'}}>FomBuzz</h2>
                <p>FormBuzz is a platform that provides available events. One can create and add people to the events
                manage the events easily or join the available events and travel as a group</p>
                <div style={{marginLeft:'80px',}}>
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
         <h5>Services</h5>
          <p> Create Events</p>
          <p> Manage Events</p>
          <p> Join Events</p>
        </Grid>
        <Grid item xs={2}>
          <h5>Links Info</h5>
          <p> Premium Members</p>
          <p> FAQs</p>
          <p> Community</p>
        </Grid>
        <Grid item xs={2}>
          <h5>Contact</h5>
          <p>+254711100011 <br />
          formBuzz@gmail.com <br />
          Nairobi, Kenya
          </p>


        </Grid>
      </Grid>
    </Box>
  );
}
