import React, { useContext } from "react";
import { AuthContext } from "../scripts/firebase/auth";
import firebase from "firebase";
import { Navbar, Nav } from "react-bootstrap";

const NavigationNotMain = () => {
  const { currentUser } = useContext(AuthContext);
  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("You have been signed out");
        window.location.reload();
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <Navbar
      collapseOnSelect={true}
      bg="light"
      expand="lg"
      fixed="top"
      className="navigation"
    >
      <Navbar.Brand href="/Collab/">Collab</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {currentUser ? (
          <Nav className="mr-auto">
            <Nav.Link href={"/Collab/#/profile/" + currentUser["email"]}>
              Profile
            </Nav.Link>
            <Nav.Link href="/Collab/#/public">Public</Nav.Link>
            <Nav.Link onClick={Logout}>Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            <Nav.Link href="/Collab/#/signin">Login</Nav.Link>
            <Nav.Link href="/Collab/#/signup">Register</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationNotMain;
