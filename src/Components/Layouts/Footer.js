import React from 'react'
import Tabs from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Tab from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'

export default props => (
  <Paper color="primary">
    {/*<Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>*/}
    <Typography variant="title" color="inherit">
      test
    </Typography>
    {/*<Tabs
      value={this.state.value}
      onChange={this.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
    */}
  </Paper>
)
