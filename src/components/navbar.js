import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      bg: "",
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const bg = window.scrollY < 100 ? "none" : "light";
      this.setState({ bg: bg });
    });
  }
  render() {
    return (
      <Navbar
        collapseOnSelect={true}
        bg={this.state.bg}
        expand="lg"
        fixed="top"
        className="navigation"
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Navbar.Brand>Collab</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              eventKey={1}
              as={Link}
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Features
            </Nav.Link>
            <Nav.Link
              eventKey={1}
              as={Link}
              activeClass="active"
              to="get-started"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              How Can I Get Started?
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Collab/#/login">Login</Nav.Link>
            <Nav.Link href="/Collab/#/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
