import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import saglikteknofest_icon from "../assets/images/teknofestsaglik.jpg"
import hocusfocus_icon from "../assets/images/hocusfocus.png"
import enyaroyis_icon from "../assets/images/enyaroyis.jpg"
import chatbot_icon from "../assets/images/chatbot.png"
import deneyap_projects_icon from "../assets/images/deneyap.png"
import modelteknofest_icon from "../assets/images/model.jpg"
import website_icon from "../assets/images/alien-planet-bg.jpg"
import lostspell_icon from "../assets/images/lostspell.png"
import vitabyte_icon from "../assets/images/V1.png"
import quantum_icon from "../assets/images/quantumlogo.jpg"
import hü_icon from "../assets/images/hü.jpg"
import qs from "../assets/images/q.png"

export const Projects = () => {

  const projects1 = [
    {
      title: "Teknofest Artificial Intelligence in Health 2023",
      description: "/projects/teknofestai23",
      imgUrl: saglikteknofest_icon,
    },
    {
      title: "Teknofest Model Satellite 2024",
      description: "/projects/teknofestsatelite24",
      imgUrl: modelteknofest_icon,
    },
    {
      title: "Hocus Focus",
      description: "/projects/hocusfocus",
      imgUrl: hocusfocus_icon,
    },
    {
      title: "Enyaroyis",
      description: "/projects/enyaroyis",
      imgUrl: enyaroyis_icon,
    },
    {
      title: "Quantum Shift",
      description: "/projects/quantumshift",
      imgUrl: quantum_icon,
    },
    {
      title: "Lost Spell",
      description: "/projects/lostspell",
      imgUrl: lostspell_icon,

    },
    {
      title: "Vitabyte",
      description: "/projects/vitabyte",
      imgUrl: vitabyte_icon,

    },
    {
      title: "RAF",
      description: "/projects/raf",
      imgUrl: chatbot_icon,

    },
    {
      title: "Project Q",
      description: "/projects/projectq",
      imgUrl: qs,
    },
    {
      title: "Portfolio Page",
      description: "/",
      imgUrl: website_icon,
    },
  ];
  const projectsdeneyap = [
    {
      title: "Artificial Intelligence",
      description: "/deneyap/ai",
      imgUrl: deneyap_projects_icon,
    },
    {
      title: "Software Technologies",
      description: "/deneyap/softwaretech",
      imgUrl: deneyap_projects_icon,
    },
    {
      title: "Advance Robotic",
      description: "/deneyap/advancerobotic",
      imgUrl: deneyap_projects_icon,
    },
    {
      title: "Energy Technologies",
      description: "/deneyap/energytech",
      imgUrl: deneyap_projects_icon,
    },
    {
      title: "Robotic",
      description: "/deneyap/robotic",
      imgUrl: deneyap_projects_icon,
    },
    {
      title: "Cyber Security",
      description: "/deneyap/cybersecurity",
      imgUrl: deneyap_projects_icon,

    },
    {
      title: "Electronic Programming",
      description: "/deneyap/electronicprogramming",
      imgUrl: deneyap_projects_icon,

    },
    {
      title: "Aerospace Technologies",
      description: "/deneyap/aerospacetech",
      imgUrl: deneyap_projects_icon,

    },
    {
      title: "Materials Science and Nanotechnology",
      description: "/deneyap/materialscience",
      imgUrl: deneyap_projects_icon,

    },
    {
      title: "Mobil Application",
      description: "/deneyap/mobilapp",
      imgUrl: deneyap_projects_icon,

    },
    {
      title: "Design and Production",
      description: "/deneyap/design",
      imgUrl: deneyap_projects_icon,

    },
  ];

  const projectshu = [
    {
      title: "BBM-103",
      description: "/bbm/103",
      imgUrl: hü_icon,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <div className="hebele">
          <span className="tagline">%100 Alien Craftsmanship</span>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p>Below you can find examples of the projects I have developed so far. In the "G" tab, there are projects that I contributed to the development of in many different fields, while in the "DY" tab, there is information about the courses I took during my Deneyap education and the graduation projects of these courses. In "HU" tab you can find solutions of assigments which given by Hacettepe University.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">G</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">DY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">HU</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects1.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              projectsdeneyap.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <Row>
                            {
                              projectshu.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </div>

      </Container>
    </section>
  )
}
