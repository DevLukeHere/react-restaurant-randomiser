import React, { Fragment, useState } from "react";
import { Button, Grid } from "@mui/material";
import RestaurantCards from "./RestaurantCards";
import RestaurantFormField from "./RestaurantFormField";
import { v4 as uuidv4 } from 'uuid';

function RestaurantListingSection() {
  const [openDialog, setOpenDialog] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantCuisine, setRestaurantCuisine] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [restaurantComment, setRestaurantComment] = useState("");
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
    setRestaurants([...restaurants, restaurant])
    setOpenDialog(false);
  };

  const onChangeRestaurantName = (e) => {
    const name = e.target.value;
    setRestaurant({...restaurant, name: name})
    // setRestaurantName(name);
  };
  
  const onChangeRestaurantCuisine = (e) => {
    const cuisine = e.target.value;
    setRestaurant({...restaurant, cuisine: cuisine})
    // setRestaurantCuisine(cuisine);
  };

  const onChangeRestaurantLocation = (e) => {
    const location = e.target.value;
    setRestaurant({...restaurant, location: location})
    // setRestaurantLocation(location);
  };
  
  const onChangeRestaurantComment = (e) => {
    const comment = e.target.value;
    setRestaurant({...restaurant, comment: comment})
    // setRestaurantComment(comment);
  };

  // console.log("restaurant:", restaurant)
  // console.log("restaurants:", restaurants)

  return (
    <Fragment>
      <Grid container justifyContent="center">
        <Button variant="outlined" onClick={handleOpenDialog}>
          add restaurant
        </Button>
      </Grid>
      <RestaurantCards restaurants={restaurants} />
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
