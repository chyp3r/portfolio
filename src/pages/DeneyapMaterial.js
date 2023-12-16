import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import deneyap_icon from "../assets/images/deneyap.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function DeneyapMaterial() {
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
                  <h1>{`MATERIAL SCIENCE`}</h1>
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
                  <p>Within the scope of this course, students will observe through experiments how atomic structure and nanostructure, properties, performance and processes are interconnected, and gain knowledge about advanced characterization methods such as electron microscopy and atomic force microscopy.</p>
                  <p>We will take a closer look at how science and engineering are inspired by nature, with examples, and these observations will be included throughout the training. At the end of the training, students will get to know the properties of nano-sized materials, the scientific facts behind these properties and various application areas. It is aimed that students will have the skills to make basic comments about nanotechnology and material science. The planned duration of the training is 7 weeks.</p>
                  <p>As a graduation project, we were expected to prepare a project in line with development goals by using materials science effectively. As a team, we developed a project to use the electricity produced by laying piezzo electric sensors on the sidewalks in street lighting.</p>
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