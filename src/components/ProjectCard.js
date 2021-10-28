import React from "react";
import { Card } from "react-bootstrap";
import { colors } from "../data";
import imageHolder from "../assets/imageHolder.png";
import folio from "../assets/folio.png";
import sudoku from "../assets/backtrackingSudoku.gif";
const images = { imageHolder, folio, sudoku };

const ProjectCard = (props) => {
  return (
    <Card
      text={"white"}
      style={{ backgroundColor: colors.c5, width: "20vw", height: "50vh" }}
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
          maxWidth: "20vw",
          width: "auto",
          padding: "1vh",
        }}
      />
      <Card.Title
        style={{
          margin: "auto",
        }}
      >
        {props.title}
      </Card.Title>
      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
