import React from "react";
import { connect } from "react-redux";
import { NavLink, HashRouter, Route } from "react-router-dom";

import Home from "../home/home";
import Stuff from "../stuff/stuff";
import Contact from "../contact/contact";

import './dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="col-md-6 col-md-offset-3">
          <ul className="ul">
            <li>
              <NavLink to="/home">home</NavLink>
            </li>
            <li>
              <NavLink to="/stuff">stuff</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>

          <Route path="/home" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
