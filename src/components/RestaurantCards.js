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
      {props.restaurants.map((restaurant, index) => (
        <Card key={restaurant.id} style={{ marginBottom: "1rem" }}>
          <CardContent>
            <Typography variant="subtitle1">Name: {restaurant.name}</Typography>
            <Typography variant="subtitle1">
              Cuisine: {restaurant.cuisine}
            </Typography>
            <Typography variant="subtitle1">
              Location: {restaurant.location}
            </Typography>
            <Typography variant="subtitle1">
              Comments: {restaurant.comment}
            </Typography>
            <CardActions>
              <Button
                onClick={() => props.handleRemoveRestaurant(index)}
              >
                remove restaurant
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default RestaurantCards;
