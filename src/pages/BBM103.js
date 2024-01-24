import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import py_icon from "../assets/icons/python.svg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function BBM103() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="hubanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Introduction to Programming Lab 1</span>
                  <h1>{`BBM 103`}</h1>
                </div>}
            </TrackVisibility>
        </Row>
      </Container>
    </section>
      <section className="projectpage" id="projectpage">
        <Container>
          <div className="skill-bx">
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <div className={""}>
                  <span className="tagline">About Lesson</span>
                  <p>Course Purpose: This course serves as an introduction to the fundamentals of computer science and programming. The aim of the course is to provide students with some or no programming experience with skills that will help them solve programming problems using abstract concepts.</p>
                  <p>Course Content: This course is built around basic topics such as flow control, functions, lists, file operations, simple data structures, function design, recursion and memory management. The class will use Python and C programming languages ​​as tools to provide basic concepts of computer programming.</p>
                  <p>When the course ends, the source codes of all assignments will be added to Github.</p>
                  <div className="social-icon">
                    <a href="https://github.com/chyp3r/HUCS-BBM103"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={py_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* <ProjectPhoto></ProjectPhoto> */}
      <Footer></Footer>
    </div>
  )
}