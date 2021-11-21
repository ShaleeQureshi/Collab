import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./private-route"; // For private routes (i.e. require auth)
import { AuthProvider } from "./firebase/auth"; // To enable auth
import ScrollToTop from "./scroll-to-top";

// Importing Views
import HomeView from "../views/home";
import LoginView from "../views/login";
import ProfileView from "../views/profile";
import PublicView from "../views/public";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/Collab/">
        <ScrollToTop />
        <Switch>
          <Route path={["/", "/home"]} exact component={HomeView} />
          <Route
            path={[
              "/login",
              "/log-in",
              "/signin",
              "/sign-in",
              "/signup",
              "/sign-up",
              "/register",
            ]}
            exact
            component={LoginView}
          />
          <PrivateRoute path="/profile/:email" exact component={ProfileView} />
          <PrivateRoute path="/public" exact component={PublicView} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
