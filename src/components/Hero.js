import React from "react";
import { Container, Row } from "react-bootstrap";
import { colors } from "../data";

const Hero = () => {
  return (
    <section style={{}}>
      <Container
        style={{
          padding: "2rem",
          backgroundColor: colors.c5,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: "94vh",
        }}
      >
        <Row style={{ position: "absolute", top: "50%" }}>
          <h1>Hello, world!</h1>
          <p>This is a blurb about myself, Kenny Luu.</p>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
