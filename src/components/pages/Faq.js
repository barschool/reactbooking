import React, { Component, Fragment } from "react"
import Header from "../Header"

export default class Faq extends Component {
  render() {
    return (
      <Fragment>
        <Header store={this.props.store} />
        <div>Faq</div>
      </Fragment>
    )
  }
}
