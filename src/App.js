import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RestaurantListingSection from "./components/RestaurantListingSection";

function App() {
  return (
    <Fragment>
      <Container>
        <Grid container justifyContent="center">
          <Typography variant="h4">Restaurant Randomiser</Typography>
        </Grid>
        <RestaurantListingSection />
      </Container>
    </Fragment>
  );
}

export default App;
