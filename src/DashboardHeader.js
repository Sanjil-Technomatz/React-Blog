import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export class DashboardHeader extends React.Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "black" }}>
          <Navbar>
            <Container>
              <Navbar.Brand style={{ color: "white" }}>
                Create Your post{" "}
              </Navbar.Brand>

              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ color: "white" }}>
                  Signed in as :{" "}
                  <b style={{ fontSize: "25px" }}>
                    {JSON.parse(localStorage.getItem("name"))}
                  </b>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}
