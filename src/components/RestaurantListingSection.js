import React, { Fragment, useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
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
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const [disableAddButton, setDisableAddButton] = useState(true);
  const [finishPlaying, setFinishPlaying] = useState(false);

  useEffect(() => {
    if (restaurant["name"] > 0) {
      setDisableAddButton(false);
    } else {
      setDisableAddButton(true);
    }
  }, [restaurants]);

  const formValidation = (name) => {
    if (name.length > 0) {
      setDisableAddButton(false);
    } else {
      setDisableAddButton(true);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setRestaurant({
      ...restaurant,
      id: "",
      name: "",
      cuisine: "",
      location: "",
      comment: "",
    });
  };

  const handleAddRestaurant = () => {
    setRestaurants([...restaurants, restaurant]);
    setRestaurant({
      ...restaurant,
      id: "",
      name: "",
      cuisine: "",
      location: "",
      comment: "",
    });
    setOpenDialog(false);
  };

  const handleRandomiser = () => {
    setFinishPlaying(true);
    setSelectedRestaurant(
      restaurants[Math.floor(Math.random() * restaurants.length)]
    );
  };

  const handleRemoveRestaurant = (index) => {
    setRestaurants((restaurants) => restaurants.filter((_, i) => i !== index));
  };

  const onChangeRestaurantName = (e) => {
    const name = e.target.value;
    formValidation(name);
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

  const handleRestart = (e) => {
    setRestaurants([]);
    setFinishPlaying(false);
    setSelectedRestaurant({});
  };

  return (
    <Fragment>
      <Grid container justifyContent="center" style={{ margin: "1rem 0" }}>
        {!finishPlaying && (
          <Grid item style={{ marginRight: "1rem" }}>
            <Button variant="outlined" onClick={handleOpenDialog}>
              add restaurant
            </Button>
          </Grid>
        )}
        {restaurants.length > 1 && !finishPlaying ? (
          <Grid item>
            <Button variant="contained" onClick={handleRandomiser}>
              help me pick
            </Button>
          </Grid>
        ) : null}
        {finishPlaying && (
          <Grid item>
            <Button variant="contained" onClick={handleRestart}>
              play again
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid style={{ margin: "1rem 0", textAlign: "center" }}>
        {Object.keys(selectedRestaurant).length !== 0 ? (
          <Typography variant="h4" color="primary">
            Congratulations! Let's go to {selectedRestaurant.name}
          </Typography>
        ) : null}
      </Grid>
      <RestaurantCards
        restaurants={restaurants}
        handleRemoveRestaurant={handleRemoveRestaurant}
        finishPlaying={finishPlaying}
      />
      <RestaurantFormField
        openDialog={openDialog}
        formValidation={formValidation}
        disableAddButton={disableAddButton}
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
