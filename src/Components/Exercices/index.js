import React from 'react'
import { Grid } from 'material-ui'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

export default props => (
  <Grid container>
    <Grid item sm={6} />
    <LeftPane />
    <Grid item sm={6} />
    <RightPane />
  </Grid>
)
