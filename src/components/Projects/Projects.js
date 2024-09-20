import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="TaskMaster"
              description="A minimalistic to-do list application built with ReactJS. The app allows users to add, edit, and delete tasks with ease. Its clean and intuitive interface enables users to manage their daily tasks efficiently, ensuring a focused and productive workflow. Perfect for those who prefer simplicity, the app helps users track what needs to be done without any distractions."
              ghLink="https://github.com/RIVAL231/To_do_mern"
              demoLink="https://to-do-mern-frontend-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Personal Portfolio"
              description="A personal portfolio website built with ReactJS. The website showcases my skills, projects, and blogs. It also provides a brief introduction about me and my journey as a developer. The website is designed to be responsive and user-friendly, ensuring a seamless experience for visitors. It is a reflection of my work and passion for web development."
              ghLink="https://github.com/RIVAL231/Personal_Portfolio"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
