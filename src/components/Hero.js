import React, { Component } from "react";

import { colors } from "../data";

export default class Hero extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: colors.c5, color: colors.c3, height: "90vh" }}
      >
        <div style={{ position: "relative", top: "50%", left: "25vw" }}>
          <h1>Hello, world!</h1>
          <p>This is a blurb about myself, Kenny Luu.</p>
        </div>
      </div>
    );
  }
}
