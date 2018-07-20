import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "mobx-react"

import Main from "./components/Main"
import store from "./stores/RootStore"

class App extends Component {
  componentDidMount() {
    store.setWindow()
  }
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
