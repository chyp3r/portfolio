import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import deneyap_icon from "../assets/images/deneyap.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function DeneyapEnergy() {
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
                  <h1>{`ENERGY TECHS`}</h1>
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
                  <p>Raising awareness about renewable energy sources and the reasons why they are needed is the main purpose of this training. Students are expected to understand the importance of renewable energy resources and to have ideas and basic knowledge about the studies on renewable energy.</p>
                  <p>Raising awareness on interdisciplinary issues such as non-renewable energies as well as renewable energies, sustainable environmental education, operation, distribution and management of technologies related to different energy fields are also among the training objectives. It is aimed for students to gain experience especially in electric vehicles. The course lasts 12 weeks. At the end of the course, they develop a research-based project.</p>
                  <p>As a graduation project, we were expected to prepare a house model that works with 100 percent green energy. We were also asked to prepare a mobile application with which we can control many features of this house.</p>
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