import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./IndiaPage/details.js";
import DetailedOverView from "./WorldPage/detailedOverView.js";
import About from "./common/about";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/covid-19-react" component={Details} />
          <Route path="/world" component={DetailedOverView} />
          <Route path="/india" component={Details} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}
export default App;
