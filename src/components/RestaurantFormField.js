import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

function RestaurantFormField(props) {
  return (
    <div>
      <Dialog open={props.openDialog} onClose={props.handleCloseDialog}>
        <DialogTitle>Restaurant Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in restaurant details
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="restaurant-name-field"
            label="Restaurant Name"
            fullWidth
            variant="filled"
            onChange={props.onChangeRestaurantName}
          />
          <TextField
            autoFocus
            margin="dense"
            id="restaurant-cuisine-field"
            label="Cuisine Type"
            fullWidth
            variant="filled"
            onChange={props.onChangeRestaurantCuisine}
          />
          <TextField
            autoFocus
            margin="dense"
            id="restaurant-location-field"
            label="Location"
            fullWidth
            variant="filled"
            onChange={props.onChangeRestaurantLocation}
          />
          <TextField
            autoFocus
            margin="dense"
            id="restaurant-rating-field"
            label="Comments"
            fullWidth
            variant="filled"
            onChange={props.onChangeRestaurantComment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseDialog}>Cancel</Button>
          <Button
            onClick={props.handleAddRestaurant}
            disabled={props.disableAddButton}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RestaurantFormField;
