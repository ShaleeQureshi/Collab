import React from "react";
import NavigationNotMain from "../components/navbar-not-main";
import Footer from "../components/footer";

import { Container } from "react-bootstrap";
import TableComponent from "../components/table-component";

const PublicView = () => {
  return (
    <div>
      <NavigationNotMain />
      <div className="wrapper">
        <Container className="mt-5">
          <div className="mt-5">
            <h4 className="mt-5 pt-5 text-center">
              Below you will find Lessons uploaded by all of our users. Enjoy!
            </h4>
            <TableComponent node="publicRespository" />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default PublicView;
