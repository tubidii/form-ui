import React from "react";
import Header from './components/Header';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EventCard from "../EventCard";
import {events} from "./data";
import {TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {Search} from "@mui/icons-material";
import Typography from "@mui/material/Typography";


export default function Home() {
  return (
    <>
      <Header/>
      <Box sx={{width: "100%",overflowX:"hidden"}}>
        <Box sx={{marginTop: "4rem", marginBottom: "3rem"}}>
          <Typography sx={{fontWeight: "lighter"}} fontWeight={'lighter'} variant={"h3"} textAlign={"center"}
                      marginBottom={"2rem"}>Events</Typography>
          <Grid container justifyContent={'center'} spacing={1}>
            <Grid item xs={10}>
              <TextField InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search/>
                  </InputAdornment>
                ),
              }} fullWidth label="Search Events" id="fullWidth"/>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{marginX: "1rem", marginTop: "3rem"}}>
          <Grid container spacing={1}>
            {
              events.map(
                ({title, tagLine, imageUrl, price}) => {
                  return (
                    <Grid item xs={3}>
                      <EventCard
                        title={title}
                        tagLine={tagLine}
                        price={price}
                        imageUrl={imageUrl}/>
                    </Grid>
                  )
                }
              )
            }
          </Grid>
        </Box>
      </Box>
    </>
  )
}
