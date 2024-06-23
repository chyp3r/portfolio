import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import java_icon from "../assets/icons/java.svg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function BBM104() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="hubanner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Introduction to Programming Lab 2</span>
                  <h1>{`BBM 104`}</h1>
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
                  <p>With this course, the student will be introduced to object-oriented programming. The main purpose of the course is to demonstrate the fundamentals of object-oriented programming with a selected programming language and to enable students to learn it by practicing. Java programming language was used for the course.
                  </p>
                  <p>When the course ends, the source codes of all assignments will be added to Github.</p>
                  <div className="social-icon">
                    <a href="https://github.com/chyp3r/HUCS-BBM104"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={java_icon} className='projectpage-imgbx' />
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