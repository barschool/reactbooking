import React from "react"

import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Menu from "./Menu"
import Logo from "../images/ebs-logo.svg"

export default ({ handleClick }) => (
  <div>
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography color="inherit" style={{ flex: 1 }}>
          <img src={Logo} style={{ maxWidth: 200, verticalAlign: "bottom" }} alt="logo" />
        </Typography>
        <Menu />
      </Toolbar>
    </AppBar>
  </div>
)
