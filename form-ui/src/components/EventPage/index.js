import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';



export default function Events() {
    const [value, setValue] = React.useState(new Date());
    const Input = styled('input')({
        display: 'none',
      });

    return (
        <>
            <Grid container justifyContent={'center'} sx={{ marginTop: { xs: '100px', md: '100px' } }}>
                <Grid item xs={11} md={4}>


                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12}>
                                    <h3 style={{ textAlign: 'center' }}> Create Event</h3>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth sx={{ marginBottom: '0.5rem' }} label="Event Name" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth sx={{ marginBottom: '0.5rem' }} label="Enter Venue" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth sx={{ marginBottom: '0.5rem' }} label="Enter Price" variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth sx={{ marginBottom: '0.5rem' }} label="Max Attendees" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} >
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                        <Button variant="contained" component="span">
                                            Upload Image
                                        </Button>
                                    </label>
                                    <label htmlFor="icon-button-file">
                                        <Input accept="image/*" id="icon-button-file" type="file" />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                    <Button variant="contained">Create </Button>

                                </Grid>


                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}