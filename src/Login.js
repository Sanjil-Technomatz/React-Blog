import React from "react";
import { withRouter } from "react-router";
import background from "./images/1.jpg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" };
  }

  handleChange1 = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ password: event.target.value });
  };

  handleClick = () => {
    if (
      this.state.email === JSON.parse(localStorage.getItem("email")) &&
      this.state.password === JSON.parse(localStorage.getItem("password"))
    ) {
      this.props.history.push("/dashboard");
    } else {
      alert("Wrong email or password");
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
            <h1>Sign In</h1>
            <p>Please fill this form to Login account.</p>
            <hr />
            <div className="form-group">
              <label className="fs-3">
                Email:
                <input
                  type="email"
                  className="form-control"
                  email={this.state.value}
                  onChange={this.handleChange1}
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
                  onChange={this.handleChange2}
                  required
                />
              </label>
            </div>

            <br />

            <button onClick={this.handleClick} className="btn btn-dark btn-lg ">
              {" "}
              Login{" "}
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default withRouter(Login);
