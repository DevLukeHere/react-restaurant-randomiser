import React, { Fragment, useState } from "react";
import { Button, Grid } from "@mui/material";
import RestaurantCards from "./RestaurantCards";
import RestaurantFormField from "./RestaurantFormField";
import { useId } from "react-id-generator";

function RestaurantListingSection() {
  const [restaurantId] = useId();
  const [openDialog, setOpenDialog] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantCuisine, setRestaurantCuisine] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");
  const [restaurantComment, setRestaurantComment] = useState("");
  const [restaurants, setRestaurants] = useState([
    {
      id: restaurantId,
      name: "Restaurant A",
      cuisine: "Western",
      location: "Damansara Utama",
      comment: "A bit pricey.",
    },
    {
      id: restaurantId,
      name: "Restaurant B",
      cuisine: "Japanese",
      location: "Bandar Utama",
      comment: "Portion too small.",
    },
    {
      id: restaurantId,
      name: "Restaurant C",
      cuisine: "Malay",
      location: "TTDI",
      comment: "Not much variety.",
    },
  ]);

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
      <RestaurantCards restaurants={restaurants} />
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
