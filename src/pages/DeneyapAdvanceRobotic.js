import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import deneyap_icon from "../assets/images/deneyap.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function DeneyapAdvance() {
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
                  <h1>{`ADVANCE ROBOTIC`}</h1>
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
                  <p>Within the scope of this course, students will learn about robot types and technological applications in industrial fields, choosing the appropriate sensor for the desired robotic application and applying basic signal processing methods by installing the appropriate hardware, performing motor motion control via a ready-made development card, hardware 2, 3 and 5-axis robot system applications. and they achieve general gains such as being able to implement it with their software.</p>
                  <p>This course provides opportunities to reinforce previously taught and applied knowledge and make more in-depth applications. It is aimed that students will be able to design faster, stronger and smarter robots with the infrastructure they received in other trainings and the elements that feed robotic technology. The course lasts 12 weeks. A task-based competition is held at the end of the course.</p>
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