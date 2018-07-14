import React from 'react'
import { Tabs, Paper } from 'material-ui'
import Tab from 'material-ui/Tabs'

export default props => (
  <Paper color="primary">
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
)
