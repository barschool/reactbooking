import React, { Component, Fragment } from "react"
import Header from "../Header"
import { inject } from "mobx-react"

@inject("store")
export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>About</div>
      </Fragment>
    )
  }
}
