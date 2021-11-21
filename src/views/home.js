import React from "react";
import { Link } from "react-scroll";
import Footer from "../components/footer";
import Navigation from "../components/navbar";
import { Container, Row, Col, Button } from "react-bootstrap";

// SVGs
import HOME_SVG from "../assets/svg/undraw_work_together_re_5yhn.svg";
import FEATURES_SVG from "../assets/svg/Features.png";
import GETTING_STARTED from "../assets/svg/Getting-Started.png";

const HomeView = () => {
  return (
    <div>
      <div className="wrapper view-home">
        <Navigation />
        <Container>
          <section className="section-landing" id="home">
            <div className="left" id="landing-left">
              <h1>Collab.</h1>
              <h4>The Data Vault</h4>
              <Link
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <Button variant="outline-dark">View Features</Button>
              </Link>
            </div>
            <div className="right">
              <img className="home-svgs" src={HOME_SVG} alt="SVG" />
            </div>
          </section>
          <section className="section-features" id="features">
            <h1 className="text-center">Features.</h1>
            <Row xs={1} md={2} className="mt-2">
              <Col className="mt-5">
                <Row xs={1} md={2} className="mt-3">
                  <Col className="mt-5">
                    <h4>Centralized System</h4>
                    <p>
                      Collab is designed to centralize all the data that is
                      uploaded to make it easier to share.
                    </p>
                  </Col>
                  <Col className="mt-5">
                    <h4>Data Backup</h4>
                    <p>
                      All uploaded Data is backed up in our Firebase Realtime
                      Database.
                    </p>
                  </Col>
                </Row>
                <Row xs={1} md={2} className="mt-5">
                  <Col className="mt-5">
                    <h4>Free up to 2GB of Storage</h4>
                    <p>Use up to 2GB of storage for no cost!</p>
                  </Col>
                  <Col className="mt-5">
                    <h4>Public</h4>
                    <p>
                      Want to share your resources? Make them public for
                      everyone to see!
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col className="mt-5">
                <img src={FEATURES_SVG} alt="Features" className="mt-5" />
              </Col>
            </Row>
          </section>
          <section className="section-start" id="get-started">
            <h1 className="text-center">Getting Started</h1>
            <Row className="pt-5">
              <Col sm={true} className="text-center pt-5">
                <img src={GETTING_STARTED} alt="Me" />
              </Col>
              <Col sm={true} className="pt-5 mt-3">
                <div className="text-cemter mt-1">
                  <h4>Getting setup with Collab.</h4>
                  <div>
                    <p>
                      Create an account for free by clicking the buttom below!
                    </p>
                    <Button variant="outline-dark w-25" href="/Collab/#/signup">
                      Sign Up
                    </Button>
                  </div>
                  <div className="mt-3">
                    <p>Already have an account?</p>
                    <Button variant="outline-dark w-25" href="/Collab/#/signin">
                      Sign In
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default HomeView;
