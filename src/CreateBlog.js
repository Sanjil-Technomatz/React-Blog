import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router";
import { BlogHeader } from "./BlogHeader";

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: "" };
  }
  handleChange = (event) => {
    this.setState({ post: event.target.value });
  };
  handleClick = () => {
    if (this.state.post !== "") {
      this.props.history.push("/dashboard");
    } else {
      alert("Write post first");
    }
  };
  render() {
    return (
      <>
        <BlogHeader />

        <div
          style={{
            textAlign: "center",
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
                rows={5}
                style={{ width: "1000px", marginLeft: "400px" }}
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
        </div>
      </>
    );
  }
}
export default withRouter(CreateBlog);
