import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function RestaurantCards(props) {
  return (
    <>
      {props.restaurants.map((restaurant, index) => (
        <Card key={restaurant.id} style={{ marginBottom: "1rem" }}>
          <CardContent>
            <div style={{ textAlign: "end" }}>
              <IconButton
                color="primary"
                aria-label="delete restaurant"
                onClick={() => props.handleRemoveRestaurant(index)}
                disabled={props.finishPlaying ? true : false}
              >
                <DeleteIcon />
              </IconButton>
            </div>
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
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default RestaurantCards;
