import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { Home, About, Contact, Destinations, Faq, Courses } from "./pages"
import SelectCourse from "./pages/SelectCourse"
export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/select-course" component={SelectCourse} />
      </Switch>
    )
  }
}
