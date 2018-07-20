import React, { Component, Fragment } from "react"
import Header from "../Header"

export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Header store={this.props.store} />
        <div>Courses</div>
      </Fragment>
    )
  }
}
