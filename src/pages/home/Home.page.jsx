import React from "react";
import Weather from "./Weather.component";
import { Container, Row } from "react-bootstrap";

import "./Home.styles.scss";

const Home = () => {
  return (
    <Container fluid="md">
      <Row className="banner-container">
        <Weather />
      </Row>
    </Container>
  );
};

export default Home;
