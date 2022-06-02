import React, { Fragment, useState } from "react";
import { Button, Grid } from "@mui/material";
import RestaurantCards from "./RestaurantCards";
import RestaurantFormField from "./RestaurantFormField";
import { v4 as uuidv4 } from "uuid";

function RestaurantListingSection() {
  const [openDialog, setOpenDialog] = useState(false);
  const [restaurant, setRestaurant] = useState({
    id: "",
    name: "",
    cuisine: "",
    location: "",
    comment: "",
  });
  const [restaurants, setRestaurants] = useState([]);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddRestaurant = () => {
    setRestaurants([...restaurants, restaurant]);
    setOpenDialog(false);
  };

  const handleRandomiser = () => {
    //
  };

  const handleRemoveRestaurant = (index) => {
    setRestaurants((restaurants) => restaurants.filter((_, i) => i !== index));
  };

  const onChangeRestaurantName = (e) => {
    const name = e.target.value;
    setRestaurant({ ...restaurant, name: name, id: uuidv4() });
  };

  const onChangeRestaurantCuisine = (e) => {
    const cuisine = e.target.value;
    setRestaurant({ ...restaurant, cuisine: cuisine });
  };

  const onChangeRestaurantLocation = (e) => {
    const location = e.target.value;
    setRestaurant({ ...restaurant, location: location });
  };

  const onChangeRestaurantComment = (e) => {
    const comment = e.target.value;
    setRestaurant({ ...restaurant, comment: comment });
  };

  return (
    <Fragment>
      <Grid container justifyContent="center" columnSpacing={3} style={{ margin: "1rem 0" }}>
        <Grid item>
          <Button variant="outlined" onClick={handleOpenDialog}>
            add restaurant
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={handleRandomiser}>help me pick</Button>
        </Grid>
      </Grid>
      <RestaurantCards
        restaurants={restaurants}
        handleRemoveRestaurant={handleRemoveRestaurant}
      />
      <RestaurantFormField
        openDialog={openDialog}
        onChangeRestaurantName={onChangeRestaurantName}
        onChangeRestaurantLocation={onChangeRestaurantLocation}
        onChangeRestaurantComment={onChangeRestaurantComment}
        onChangeRestaurantCuisine={onChangeRestaurantCuisine}
        handleCloseDialog={handleCloseDialog}
        handleAddRestaurant={handleAddRestaurant}
      />
    </Fragment>
  );
}

export default RestaurantListingSection;
