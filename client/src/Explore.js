import React from "react";
import HeaderM from "./Map/HeaderM/HeaderM";
import List from "./Map/List/List";
import { CssBaseline, Grid } from "@mui/material";
const Explore = () => {
  return (
    <div>
      <CssBaseline />
      <HeaderM />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
      </Grid>
    </div>
  );
};

export default Explore;
