import * as React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../LandingPage/components/Header'
import data from '../LandingPage/data';
import Box, { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CallIcon from '@mui/icons-material/Call';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Details() {
    const { id } = useParams
    return (
        <>
            <Header />
            <Grid container sx={{padding:'30px'}}>
                <Card sx={{minHeight: 500, }}>
                    <Grid container >
                        <Grid item xs={12}  md={6} >
                        <CardMedia
                            component="img"
                            height="200"
                            image="/assets/ngong2.png"
                            alt="green iguana"
                            sx={{height:'100%', }}
                            
                        />
                        </Grid>
                   
                    <Grid items md={6} >
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div" >
                            Ngong
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            <AccountBalanceWalletIcon /> 1200/=
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{mt:'-10px'}}>
                            <LocationOnIcon /> Ngong Forest, Nairobi Kenya
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <CalendarMonthIcon /> 18/04/2022
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <CallIcon /> 0700152742
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Overview
                        </Typography>
                        <Typography  component="div">
                           <li>Dressing code: Sporty wear</li>
                           <li>Be ready to have fun</li>
                        </Typography>



                    </CardContent>
                    </Grid>
                    </Grid>
                </Card>

            </Grid>

        </>
    )
}