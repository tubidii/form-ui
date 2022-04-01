import React from "react";
import {Card, CardActions} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Share} from "@mui/icons-material";


const EventCard = (
  {
    imageUrl,
    title,
    tagLine,
    date,
    price
  }
) => {
  return (
    <Card sx={{height: "100%"}}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tagLine}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Ksh.{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant={"outlined"} size="small" startIcon={<Share/>}>Share</Button>
        <Button variant={"outlined"} size="small">Learn More</Button>
      </CardActions>

    </Card>
  )
}


export default EventCard;
