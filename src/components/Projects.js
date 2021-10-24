import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { projectData, colors } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [cards] = useState(
    projectData.map((project) => {
      return (
        <Col style={{ padding: "100px" }}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.imageSrc}
          />
        </Col>
      );
    })
  );

  const getRows = () => {
    let rows = [];
    for (let i = 0; i < cards.length; i = i + 2) {
      rows.push(<Row style={{ height: "70vh" }}>{cards.slice(i, i + 2)}</Row>);
    }
    return rows;
  };

  return <Container style={{ left: "25%" }}>{getRows()}</Container>;
};

export default Projects;
