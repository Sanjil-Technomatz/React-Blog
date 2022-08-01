import React from "react";
import { withRouter } from "react-router";
import { DashboardHeader } from "./DashboardHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import background from "./images/2.avif";
import "./card.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: [], value: "" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleClick = () => {
    if (this.state.value !== "") {
      this.setState(
        {
          post: [...this.state.post, this.state.value],
        },
        () => {
          document.getElementById("print").innerHTML = this.state.post
            .map((item) => `<h4 id="main">` + item + `<h4/>`)
            .join("");
        }
      );
    }
  };

  render() {
    return (
      <>
        <DashboardHeader />
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            height: "92.9vh",
            width: "100%",
            overflowY: "scroll",
            textAlign: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <br />
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h3>
                  Write your post <b>here -</b>
                </h3>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                style={{
                  width: "1000px",
                  marginLeft: "400px",
                }}
                onChange={this.handleChange}
                placeholder="Whatever you want to post write here.."
                required
              />
            </Form.Group>
          </Form>
          <Button
            onClick={this.handleClick}
            className="btn-lg"
            variant="danger"
          >
            Post
          </Button>
          <br />
          <br />
          <p id="print"></p>
        </div>
      </>
    );
  }
}
export default withRouter(Dashboard);
