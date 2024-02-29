import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projectsTab1 = [
    {
      title: 'Hospital App using Java and Spring Boot',
      description: 'I led the development of a robust Hospital App utilizing Java and Spring Boot technologies. This groundbreaking application serves as a centralized platform, optimizing diverse hospital operations, boosting efficiency, and ensuring the delivery of top-notch patient care.',
      imgUrl: projImg1,
    },
  ];

  const projectsTab2 = [
    {
      title: 'Shop Management System',
      description: 'Created a comprehensive Shop Management System to streamline communication and handle data. ✓ Technology used: HTML, CSS, JavaScript, and MySQL.',
      imgUrl: projImg2,
    },
  ];

  const projectsTab3 = [
    {
      title: 'Mental Education (Android App)',
      description: '✓ Developed an application to provide information on mental health disorders and Technology used: Java, Android Studio, XML',
      imgUrl: projImg3,
    },
  ];

  const projectsTab4 = [
    {
      title: 'Food Ordering Application',
      description: 'Developed a user-friendly Food Ordering Application using React, enabling customers to browse a wide range of food options, place orders, and track their delivery status. Implemented features such as user authentication, menu display, shopping cart functionality, and integration with payment gateways for seamless transactions.',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col size={12} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2 className="mb-5">Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Project 4</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {projectsTab1.map((project, index) => (
                            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                              <div className="project-img-container">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {projectsTab2.map((project, index) => (
                            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                              <div className="project-img-container">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="justify-content-center">
                          {projectsTab3.map((project, index) => (
                            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                              <div className="project-img-container">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row className="justify-content-center">
                          {projectsTab4.map((project, index) => (
                            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                              <div className="project-img-container">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
