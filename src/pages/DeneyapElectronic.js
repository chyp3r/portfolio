import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import deneyap_icon from "../assets/images/deneyap.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function DeneyapElectronic() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="deneyapbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">DENEYAP TÜRKİYE</span>
                  <h1>{`IOT`}</h1>
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
                  <p>Electronic Programming and Internet of Things training aims to enable students to produce solutions closer to real life with their basic electrical and electronics knowledge and basic software knowledge, beyond the ability to produce algorithmic solutions to real-life problems and transfer them to the computer environment.</p>
                  <p>Within the scope of this course, students will learn the basic concepts of Arduino, basic electricity concepts, breadboard, LED, resistor usage, motors-DC/Servo motor, robot arm construction, LCD screen and debugging, internet of things (IoT) basic concepts, inter-object communication applications, He receives training to raise awareness of the importance of IoT today and in the future. The training lasts 14 weeks. A research-based project is developed at the end of the course.</p>
                  <p>You can access the graduation project for this course from the link below.</p>
                  <div className="social-icon">
                    <a href="https://github.com/Chyp3r/Deneyap-Kodlar"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={deneyap_icon} className='projectpage-imgbx' />
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