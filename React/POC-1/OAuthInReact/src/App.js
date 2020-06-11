import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        <Nav />
        <div className="body">
          <Route
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props}></Home>}
          />
          <Route
            path="/callback"
            render={(props) => (
              <Callback auth={this.auth} {...props}></Callback>
            )}
          />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}

export default App;
