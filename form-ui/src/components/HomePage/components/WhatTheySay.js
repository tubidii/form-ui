import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { borderTop } from "@mui/system";

export default function WhatTheySay() {
    return (
        <Box
            sx={{
                backgroundColor: 'ivory',
                marginTop:'10px',             
            }}
        >
            <Grid container rowSpacing={2} sx={{ padding: "20px" }}>
                <Grid item xs={6} md={6}>
                    <img src="../assets/travel1.jpeg" style={{ width: '60%', height: '100%', marginLeft: '20%' }} />
                </Grid>
                <Grid item xs={6} md={6} >
                    <div><h3 style={{ borderTop: 'groove', borderBottom: "groove", padding: "20px", textAlign: "center" }}>What They say</h3></div>
                    <div><p style={{ fontSize: '30px' }}> “Travelling made me realize, A mind that is stretched by a new experience can never go back to its old dimensions.”</p></div>
                    <div style ={{marginTop:'30px' }}>
                        <p style ={{ padding:'20px', textAlign:'center', marginTop:'20px' }}>
                        ~ Oliver Holmes
                        </p>
                    </div>
                </Grid>
            </Grid>

        </Box>
    )
}