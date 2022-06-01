import React, { Fragment, useState } from "react";
import { Button, Grid } from "@mui/material";
import RestaurantCards from "./RestaurantCards";
import RestaurantFormField from "./RestaurantFormField";

function RestaurantListingSection() {
  const [openDialog, setOpenDialog] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantCuisine, setRestaurantCuisine] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [restaurantComment, setRestaurantComment] = useState("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddRestaurant = () => {
    setOpenDialog(false);
  };

  const onChangeRestaurantName = (e) => {
    const name = e.target.value;
    setRestaurantName(name);
  };

  const onChangeRestaurantLocation = (e) => {
    const location = e.target.value;
    setRestaurantLocation(location);
  };

  const onChangeRestaurantComment = (e) => {
    const comment = e.target.value;
    setRestaurantComment(comment);
  };

  const onChangeRestaurantCuisine = (e) => {
    const cuisine = e.target.value;
    setRestaurantCuisine(cuisine);
  };

  return (
    <Fragment>
      <Grid container justifyContent="center">
        <Button variant="outlined" onClick={handleOpenDialog}>
          add restaurant
        </Button>
      </Grid>
      <RestaurantCards />
      <RestaurantFormField
        openDialog={openDialog}
        onChangeRestaurantName={onChangeRestaurantName}
        onChangeRestaurantLocation={onChangeRestaurantLocation}
        onChangeRestaurantRating={onChangeRestaurantComment}
        onChangeRestaurantCuisine={onChangeRestaurantCuisine}
        handleCloseDialog={handleCloseDialog}
        handleAddRestaurant={handleAddRestaurant}
      />
    </Fragment>
  );
}

export default RestaurantListingSection;
