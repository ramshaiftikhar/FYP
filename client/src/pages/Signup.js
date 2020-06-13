import React from "react";
import { Login, Register } from "../components/login/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HomeLink } from "../widgets/links";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <>
        <HomeLink to="/" className="navbar-brand">
          Raabta
        </HomeLink>
        <SignupContainer>
          <div className="login">
            <div className="container" ref={(ref) => (this.container = ref)}>
              {isLogginActive && (
                <Login
                  containerRef={(ref) => (this.current = ref)}
                  updateUser={(userObject) => this.props.updateUser(userObject)}
                />
              )}
              {!isLogginActive && (
                <Register
                  containerRef={(ref) => (this.current = ref)}
                  updateUser={(userObject) => this.props.updateUser(userObject)}
                />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={(ref) => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </SignupContainer>
      </>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

const SignupContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Signup;
