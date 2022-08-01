import React from "react";
import { withRouter } from "react-router";
import background from "./images/1.jpg";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  handleChange1 = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChange3 = (event) => {
    this.setState({ password: event.target.value });
  };

  handleClick = () => {
    localStorage.setItem("name", JSON.stringify(this.state.name));
    localStorage.setItem("email", JSON.stringify(this.state.email));
    localStorage.setItem("password", JSON.stringify(this.state.password));
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: "100vh",
            width: "100%",
          }}
        >
          <form style={{ width: "100%", textAlign: "center" }}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <div className="form-group">
              <label className="fs-3">
                Name:
                <input
                  type="text"
                  className="form-control"
                  name={this.state.value}
                  onChange={this.handleChange1}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label className="fs-3">
                Email:
                <input
                  type="email"
                  className="form-control"
                  email={this.state.value}
                  onChange={this.handleChange2}
                  required
                />
              </label>
            </div>

            <div className="form-group">
              <label className="fs-3 ">
                Password:
                <input
                  type="password"
                  className="form-control"
                  password={this.state.value}
                  onChange={this.handleChange3}
                  required
                />
              </label>
            </div>

            <br />
            <button className="btn btn-dark btn-lg " onClick={this.handleClick}>
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Signup);
