import React from "react";
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function RestaurantCards() {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">
          Name: Village Park Nasi Lemak
        </Typography>
        <Typography variant="subtitle1">Business: </Typography>
        <Typography variant="subtitle1">
          Address: 23, Jalan 22/5a, Damansara Utama
        </Typography>
        <Typography variant="subtitle1">Rating: 7/10</Typography>
        <CardActions>
          <Button>remove restaurant</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default RestaurantCards;
