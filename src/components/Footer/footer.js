import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';



const Theme = createTheme({
  p: {
    fontWeight: '60px',
  },
  h5: {
    textAlign: 'center'
  }
});

export default function Footer() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Box theme={Theme} sx={{ width: '100%', ml: 2, backgroundColor: 'lavender' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <div style={{ width: "80%" }}>
            <h2 style={{ textAlign: 'center' }}>FomBuzz</h2>
            <p> Subscribe to our newsletters </p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <Grid item xs={2}>
              <OutlinedInput
                id="outlined-adornment-weight"
                value={values.weight}
                onChange={handleChange('weight')}
                endAdornment={<InputAdornment position="end">email</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              </Grid>
              <Grid item xs={4}>
              <Button variant="contained">Subscribe</Button>
              </Grid>
              </FormControl>
              <div style={{ marginLeft: '80px', }}>
                <FacebookIcon />
                <InstagramIcon />
                <YouTubeIcon />
              </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <h5>Services</h5>
          <p> Create Events<br />
            Manage Events<br />
            Join Events</p>
        </Grid>
        <Grid item xs={2}>
          <h5>Links Info</h5>
          <p> Premium Members<br />
            FAQs<br />
            Community</p>
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
