import React from "react";
import { Grid } from "material-ui";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
const styles = {
  Paper: { padding: 20, marginBottom: 10, marginTop: 10 }
};

export default props => (
  <Grid container>
    <Grid item sm={6} />
    <LeftPane styles={styles} />
    <Grid item sm={6} />
    <RightPane styles={styles} />
  </Grid>
);
