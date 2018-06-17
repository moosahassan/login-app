import React, { Component } from "react";
import { connect } from "react-redux";
import { loginReducer } from "../reducers/reducers";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      submitted: false
    };
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, loginError } = this.props;

    return (
      <form className="form-signin" name="loginForm" onSubmit={this.onSubmit}>
        <h3 className="form-signin-heading">welcome! please sign in</h3>
        <hr className="colorgraph"></hr>
        <br></br>
        <div className="form-group-collection">
          <div className="form-group">
            <label>email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>password:</label>
            <input
              className="form-control"            
              type="password"
              name="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
        </div>

        <button className="btn btn-lg btn-primary btn-block" name="Submit" type="submit" value="Login">
          login
        </button>

        <div className="message">
          {isLoginPending && <div>Please wait...</div>}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(loginReducer(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
