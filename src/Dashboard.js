import React from "react";
import { withRouter } from "react-router";
import { DashboardHeader } from "./DashboardHeader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import background from "./images/2.avif";
import "./card.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: [], value: "", flag: 0 };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  deletePost = (event) => {
    console.log(event.target.value);
    this.state.post.splice(event.target.value, 1);
    this.setState({ flag: 1 });
  };

  handleClick = () => {
    if (this.state.value !== "") {
      this.setState({
        post: [...this.state.post, this.state.value],
      });
    }
  };

  render() {
    const ren = this.state.post.map((item, index) => (
      <Card key={index} id="main">
        <Card.Body>
          <Card.Text>{item}</Card.Text>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Button
            id="button"
            value={index}
            onClick={this.deletePost}
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    ));
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
              <div style={{ textAlign: "-webkit-center" }}>
                <Form.Control
                  as="textarea"
                  rows={8}
                  style={{
                    width: "1000px",
                  }}
                  onChange={this.handleChange}
                  placeholder="Whatever you want to post write here.."
                  required
                />
              </div>
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
          {ren}
        </div>
      </>
    );
  }
}
export default withRouter(Dashboard);
