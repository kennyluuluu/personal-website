import React from "react";
import { colors } from "../data";

const Hero = () => {
  return (
    <div
      style={{ backgroundColor: colors.c5, color: colors.c3, height: "100vh" }}
    >
      <div style={{ position: "absolute", top: "50%", left: "25%" }}>
        <h1>Hello, world!</h1>
        <p>This is a blurb about myself, Kenny Luu.</p>
      </div>
    </div>
  );
};

export default Hero;
