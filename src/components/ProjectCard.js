import React from "react";
import { Card } from "react-bootstrap";
import { colors } from "../data";
import imageHolder from "../assets/imageHolder.png";
import folio from "../assets/folio.png";
const images = { imageHolder, folio };

const ProjectCard = (props) => {
  return (
    <Card
      text={"white"}
      style={{ backgroundColor: colors.c5, width: "20vw", height: "60vh" }}
      className="box"
    >
      <Card.Img
        variant="top"
        src={images[props.image]}
        alt="project-image"
        style={{
          margin: "auto",
          maxHeight: "20vh",
          height: "auto",
          maxWidth: "20vh",
          width: "auto",
        }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
