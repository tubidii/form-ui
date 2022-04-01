import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { borderTop } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function WhatTheySay() {
    return (
        <Box
            sx={{
                backgroundColor: 'ivory',
                mt: 4, mb: 4             
            }}
        >
            <Grid container rowSpacing={2} sx={{ padding: "20px" }}>
                <Grid item xs={4} md={6}>
                <img src= 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7' style={{ width: '60%', height: '60%', marginLeft: '10%' }} />
                </Grid>
                <Grid item xs={8} md={6} sx={{}} >
                    <div><h3 style={{ borderTop: 'groove', borderBottom: "groove", padding: "20px", textAlign: "center", }}>Stay Updated</h3></div>
                    <div><p style={{ fontSize: '20px' }}> Dont miss any updates info and content about our platform servies Subscribe to our newsletter</p></div>
                    <div style ={{marginTop:'30px', display:"flex" }}>
                    <TextField sx={{borderRadius:'0', height:'55px'}} id="outlined-basic" label="Enter your email" variant="outlined" /><Button sx={{borderRadius:'0', height:'55px'}}variant="contained">Subscribe Now</Button>
      
                    </div>
                </Grid>
            </Grid>

        </Box>
    )
}