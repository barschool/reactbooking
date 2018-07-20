import React, { Component, Fragment } from "react"
import Header from "../Header"

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Header store={this.props.store} />
        <div>Contact</div>
      </Fragment>
    )
  }
}
