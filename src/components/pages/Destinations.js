import React, { Component, Fragment } from "react"
import Header from "../Header"

export default class Destinations extends Component {
  render() {
    return (
      <Fragment>
        <Header store={this.props.store} />
        <div>Destinations</div>
      </Fragment>
    )
  }
}
