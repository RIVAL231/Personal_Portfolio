import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";

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
              imgPath={project5}
              isBlog={false}
              title="Echoed Words"
              description="A poetry blog built with NextJS. The blog features a collection of poems written by the author, covering a wide range of themes and emotions. It provides a platform for readers to explore and appreciate the art of poetry and give submissions of their own, offering a unique and engaging experience. The blog is designed to be visually appealing and easy to navigate, ensuring an enjoyable reading experience for visitors."
              ghLink="https://github.com/RIVAL231/EchoedWords"
              demoLink="https://echoed-words.vercel.app/"
              loading="lazy"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="DigiSwasth"
              description="**DigiSwasth** is a web platform designed to enhance healthcare accessibility and efficiency. Built using Next.js and deployed on Vercel, it integrates modern web technologies to offer seamless user interactions. The platform may focus on providing digital health solutions, improving patient management, or offering healthcare services online."
              ghLink="https://github.com/RIVAL231/hackbattle_healthfix"
              demoLink="https://digiswasth-xi.vercel.app/"
              loading="lazy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Personal Portfolio"
              description="A personal portfolio website built with ReactJS. The website showcases my skills, projects, and blogs. It also provides a brief introduction about me and my journey as a developer. The website is designed to be responsive and user-friendly, ensuring a seamless experience for visitors. It is a reflection of my work and passion for web development."
              ghLink="https://github.com/RIVAL231/Personal_Portfolio"
              demoLink="https://personal-portfolio-sankalp-sharmas-projects.vercel.app/"
              loading="lazy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Hackoff 4.0"
              description="A landing page for Hackoff 4.0 built with NextJS. The website provides information about the event, its schedule, and the speakers. It also allows users to register for the event and stay updated with the latest news and announcements. The website is designed to be interactive and engaging, ensuring a memorable experience for participants and attendees."
              ghLink=""
              demoLink="https://hackoff.ietvit.co"
              loading="lazy"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="TaskMaster"
              description="A minimalistic to-do list application built with ReactJS. The app allows users to add, edit, and delete tasks with ease. Its clean and intuitive interface enables users to manage their daily tasks efficiently, ensuring a focused and productive workflow. Perfect for those who prefer simplicity, the app helps users track what needs to be done without any distractions."
              ghLink="https://github.com/RIVAL231/To_do_mern"
              demoLink="https://to-do-mern-frontend-ten.vercel.app/"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
