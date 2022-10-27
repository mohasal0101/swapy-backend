import React from "react";
import "./login.scss";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.svg";
import github from "../../assets/images/github.svg";
import google from "../../assets/images/google.svg";
import linkedin from "../../assets/images/linkedin.svg";
import { connect } from "react-redux";
import { setUserAction } from "../../shared/store/actions/user.actions";
import { Dispatch } from "redux";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {
  setUserType(username: string): void;
}

class Login extends React.Component<Props> {
  state = {
    login: true,
    signUpForm: {
      name: "",
      email: "",
      password: "",
    },
    signInForm: {
      email: "",
      password: "",
    },
  };

  render() {
    return (
      <div className="login">
        <div
          className={`login__colored-container ${
            this.state.login
              ? "login__colored-container--left"
              : "login__colored-container--right"
          }`}
        ></div>
        <div
          className={`login__welcome-back ${
            this.state.login
              ? "login__welcome-back--active"
              : "login__welcome-back--inactive"
          }`}
        >
          <div className="login__welcome-back__logo-container">
            <img
              className="login__welcome-back__logo-container--image"
              src={logo}
              alt="Budwriter"
            />
            Swapy
          </div>
          <div className="login__welcome-back__main-container">
            <div className="login__welcome-back__main-container__text-container">
              <span className="login__welcome-back__main-container__text-container--title">
                Welcome Back!
              </span>
              <span className="login__welcome-back__main-container__text-container--secondary">
                To keep sharing your work with us, please log in.
              </span>
            </div>
            <div
              onClick={() => {
                this.setState({
                  login: !this.state.login,
                });
              }}
              className="login__welcome-back__main-container__button-container"
            >
              Sign In
            </div>
          </div>
        </div>
        <div
          className={`login__create-container ${
            this.state.login
              ? "login__create-container--active"
              : "login__create-container--inactive"
          }`}
        >
          Create Account
          <span className="login__create-container--info-text">
            or use email for your registration
          </span>
          <div className="login__create-container__form-container">
            <form
              className="login__create-container__form-container__form"
              onSubmit={(e) => {
                e.preventDefault();
                this.signUp();
              }}
            >
              <input
                className="login__create-container__form-container__form--name"
                type="text"
                placeholder="Name"
                value={this.state.signUpForm.name}
                onChange={(value) =>
                  this.setState({
                    signUpForm: {
                      name: value.target.value,
                      email: this.state.signUpForm.email,
                      password: this.state.signUpForm.password,
                    },
                  })
                }
                required
              />
              <input
                className="login__create-container__form-container__form--email"
                type="email"
                placeholder="Email"
                value={this.state.signUpForm.email}
                onChange={(value) =>
                  this.setState({
                    signUpForm: {
                      email: value.target.value,
                      name: this.state.signUpForm.name,
                      password: this.state.signUpForm.password,
                    },
                  })
                }
                required
              />
              <input
                className="login__create-container__form-container__form--password"
                type="password"
                placeholder="Password"
                value={this.state.signUpForm.password}
                onChange={(value) =>
                  this.setState({
                    signUpForm: {
                      password: value.target.value,
                      name: this.state.signUpForm.name,
                      email: this.state.signUpForm.email,
                    },
                  })
                }
                required
              />
              <div className="login__create-container__social-container">
                <img
                  className="login__create-container__social-container--github-icon"
                  src={github}
                  alt=""
                />
                <img
                  className="login__create-container__social-container--google-icon"
                  src={google}
                  alt=""
                />
                <img
                  className="login__create-container__social-container--linkedin-icon"
                  src={linkedin}
                  alt=""
                />
              </div>
              <button className="login__create-container__form-container__form--submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div
          className={`login__login-container ${
            !this.state.login
              ? "login__login-container--active"
              : "login__login-container--inactive"
          }`}
        >
          <div className="login__login-container__logo-container">
            <img
              className="login__login-container__logo-container--image"
              src={logo}
              alt="Budwriter"
            />
            Swapy
          </div>
          <div className="login__login-container__main-container">
            <span className="login__login-container__main-container--info-text">
              or use email for your login
            </span>
            <div className="login__login-container__main-container__form-container">
              <form
                className="login__login-container__main-container__form-container__form"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.signIn();
                }}
              >
                <input
                  className="login__login-container__main-container__form-container__form--email"
                  type="email"
                  placeholder="Email"
                  value={this.state.signInForm.email}
                  onChange={(value) =>
                    this.setState({
                      signInForm: {
                        email: value.target.value,
                        password: this.state.signInForm.password,
                      },
                    })
                  }
                  required
                />
                <input
                  className="login__login-container__main-container__form-container__form--password"
                  type="password"
                  placeholder="Password"
                  value={this.state.signInForm.password}
                  onChange={(value) =>
                    this.setState({
                      signInForm: {
                        password: value.target.value,
                        email: this.state.signInForm.email,
                      },
                    })
                  }
                  required
                />
                <div className="login__login-container__main-container__social-container">
                  <img
                    className="login__login-container__main-container__social-container--facebook-icon"
                    src={facebook}
                    alt=""
                  />
                  <img
                    className="login__login-container__main-container__social-container--google-icon"
                    src={google}
                    alt=""
                  />
                  <img
                    className="login__login-container__main-container__social-container--linkedin-icon"
                    src={linkedin}
                    alt=""
                  />
                </div>
                <button className="login__login-container__main-container__form-container__form--submit">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`login__hello-container ${
            !this.state.login
              ? "login__hello-container--active"
              : "login__hello-container--inactive"
          }`}
        >
          <div className="login__welcome-back__main-container__text-container">
            <span className="login__welcome-back__main-container__text-container--title">
              Hello, stranger!
            </span>
            <span className="login__welcome-back__main-container__text-container--secondary">
              Enter your personal details and start your own portfolio!
            </span>
          </div>
          <div
            onClick={() => {
              this.setState({
                login: !this.state.login,
              });
            }}
            className="login__welcome-back__main-container__button-container"
          >
            Sign Up
          </div>
        </div>
      </div>
    );
  }

  signUp() {
    this.setState({
      signUpForm: {
        name: "",
        password: "",
        email: "",
      },
    });
  }

  signIn() {
    this.props.history.push("/dashboard");
    this.props.setUserType(this.state.signInForm.email);
    this.setState({
      signInForm: {
        password: "",
        email: "",
      },
    });
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setUserType: (username: string) =>
      dispatch(
        setUserAction({
          username,
        })
      ),
  };
}

export default connect(null, mapDispatchToProps)(Login);

//refactor into function component

/* import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setUserAction } from '../../redux/actions/userActions';
import './Login.scss';
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import google from '../../assets/google.png';
import linkedin from '../../assets/linkedin.png';

interface ILoginProps {
    setUserType: (username: string) => void;
}

const Login: React.FC<ILoginProps> = (props) => {
    const [login, setLogin] = useState(true);
    const [signUpForm, setSignUpForm] = useState({
        name: "",
        password: "",
        email: ""
    });
    const [signInForm, setSignInForm] = useState({
        password: "",
        email: ""
    });

    const signUp = () => {
        setSignUpForm({
            name: "",
            password: "",
            email: ""
        });
    }

    const signIn = () => {
        props.history.push("/dashboard");

        props.setUserType(signInForm.email);

        setSignInForm({
            password: "",
            email: ""
        });

    }

    return (
        <div className="login">
            <div className={`login__create-container ${login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                <div className="login__create-container__logo-container">
                    <img className="login__create-container__logo-container--image" src={logo} alt="Budwriter" />
                    Budwriter
                </div>
                <div className="login__create-container__main-container">
                    <div className="login__create-container__main-container__social-container">
                        <img className="login__create-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                        <img className="login__create-container__main-container__social-container--google-icon" src={google} alt="" />
                        <img className="login__create-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" />
                    </div>
                    <span className="login__create-container__main-container--info-text">or use email for your registration</span>
                    <div className="login__create-container__main-container__form-container">
                        <form className="login__create-container__main-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            signUp();
                        }}>
                            <input
                                className="login__create-container__main-container__form-container__form--name"
                                type="text"
                                placeholder="Name"
                                value={signUpForm.name}
                                onChange={(value) => setSignUpForm({
                                    name: value.target.value,
                                    password: signUpForm.password,
                                    email: signUpForm.email
                                })}
                                required />
                            <input

                                className="login__create-container__main-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={signUpForm.email}
                                onChange={(value) => setSignUpForm({
                                    email: value.target.value,
                                    password: signUpForm.password,
                                    name: signUpForm.name
                                })}

                                required />
                            <input

                                className="login__create-container__main-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={signUpForm.password}
                                onChange={(value) => setSignUpForm({
                                    password: value.target.value,
                                    email: signUpForm.email,
                                    name: signUpForm.name
                                })}

                                required />
                            <button
                                className="login__create-container__main-container__form-container__form--submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                <div className="login__create-container__hello-container">
                    <div className="login__create-container__hello-container__text-container">
                        <span className="login__create-container__hello-container__text-container--title">
                            Hello, friend!
                            </span>
                        <span className="login__create-container__hello-container__text-container--secondary">
                            Enter your personal details and start your journey with us!
                        </span>
                    </div>
                    <div onClick={() => {
                        setLogin(!login);
                    }} className="login__create-container__hello-container__button-container">
                        Sign In
                    </div>
                </div>
            </div>
            <div className={`login__welcome-back ${login ? 'login__welcome-back--inactive' : 'login__welcome-back--active'}`}>
                <div className="login__welcome-back__logo-container">
                    <img className="login__welcome-back__logo-container--image" src={logo} alt="Budwriter" />
                    Budwriter
                </div>
                <div className="login__welcome-back__main-container">
                    <div className="login__welcome-back__main-container__social-container">
                        <img className="login__welcome-back__main-container__social-container--facebook-icon" src={facebook} alt="" />
                        <img className="login__welcome-back__main-container__social-container--google-icon" src={google} alt="" />
                        <img className="login__welcome-back__main-container__social-container--linkedin-icon" src={linkedin} alt="" />
                    </div>
                    <span className="login__welcome-back__main-container--info-text">or use your account</span>
                    <div className="login__welcome-back__main-container__form-container">
                        <form className="login__welcome-back__main-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            signIn();
                        }}>
                            <input

                                className="login__welcome-back__main-container__form-container__form--email"
                                type="email"
                                placeholder="Email"
                                value={signInForm.email}
                                onChange={(value) => setSignInForm({
                                    email: value.target.value,
                                    password: signInForm.password
                                })}
                                required />
                            <input

                                className="login__welcome-back__main-container__form-container__form--password"
                                type="password"
                                placeholder="Password"
                                value={signInForm.password}
                                onChange={(value) => setSignInForm({
                                    password: value.target.value,
                                    email: signInForm.email
                                })}
                                required />
                            <button

                                className="login__welcome-back__main-container__form-container__form--submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
                <div className="login__welcome-back__hello-container">
                    <div className="login__welcome-back__hello-container__text-container">
                        <span className="login__welcome-back__hello-container__text-container--title">
                            Welcome back!
                            </span>
                        <span className="login__welcome-back__hello-container__text-container--secondary">
                            To keep connected with us please login with your personal info
                        </span>
                    </div>
                    <div onClick={() => {
                        setLogin(!login);
                    }} className="login__welcome-back__hello-container__button-container">
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login; */
