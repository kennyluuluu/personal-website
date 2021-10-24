import React, { Component, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { projectData } from "../data";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      images: require.context("../../public/images", true),
    };
  }

  render() {
    let cards = [];
    for (let i = 0; i < projectData.length; i++) {
      // let path = `${projectData[i].imageSrc}`;
      // let image = this.images(`./imageHolder.png`);
      cards.push(
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"X"} />
          <Card.Body>
            <Card.Title>{projectData[i].title}</Card.Title>
            <Card.Text>{projectData[i].description}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
    return <CardGroup>{cards}</CardGroup>;
  }
}
