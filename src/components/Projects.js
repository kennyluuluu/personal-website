import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { projectData } from "../data";
import defaultImage from "../imageHolder.png";

export default class Projects extends Component {
  render() {
    let cards = [];
    for (let i = 0; i < 4; i++) {
      cards.push(
        <Card style={{ width: "15vmax" }}>
          <Card.Img src={defaultImage} style={{ width: "15vmax" }} />
          <Card.Body>
            <Card.Title>{projectData[0].title}</Card.Title>
            <Card.Text>{projectData[0].description}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
    return <CardGroup>{cards}</CardGroup>;
  }
}
