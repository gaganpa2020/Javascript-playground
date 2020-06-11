import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <button onClick={this.props.auth.login}>Log In</button>
      </>
    );
  }
}

export default Home;
