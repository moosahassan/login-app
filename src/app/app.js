import React, { Component } from "react";
import { connect } from "react-redux";

import Dashboard from "../dashboard/dashboard";
import Login from "../login/login";

import "./app.css";

class App extends Component {
  render() {
    let { isLoginSuccess } = this.props;

    return (
      <div className="container">
        <div className="wrapper">
          <div className="col-sm-8 col-sm-offset-2">
            <div>{isLoginSuccess ? <Dashboard /> : <Login />}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.isLoginSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
