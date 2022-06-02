import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

function RestaurantCards(props) {
  return (
    <>
      {props.restaurants.map((restaurant) => (
        <Card key={restaurant.id}>
          <CardContent>
            <Typography variant="subtitle1">Name:{" "}{restaurant.name}</Typography>
            <Typography variant="subtitle1">Cuisine:{" "}{restaurant.cuisine}</Typography>
            <Typography variant="subtitle1">Location:{" "}{restaurant.location}</Typography>
            <Typography variant="subtitle1">Comments:{" "}{restaurant.comment}</Typography>
            <CardActions>
              <Button>remove restaurant</Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default RestaurantCards;
