import React, { useContext } from "react";
import firebase from "firebase";
import { AuthContext } from "../scripts/firebase/auth";

// Components
import { Container, Button } from "react-bootstrap";
import NavigationNotMain from "../components/navbar-not-main";
import Footer from "../components/footer";

const LoginView = ({ history, previousRoute }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser && typeof previousRoute === "undefined") {
    history.push("/profile/" + currentUser["email"]);
  } else if (currentUser && typeof previousRoute !== "undefined") {
    history.push(previousRoute);
  }
  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <div className="view-login">
      <NavigationNotMain />
      <Container className="wrapper">
        <Button
          className="center"
          variant="outline-dark"
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginView;
