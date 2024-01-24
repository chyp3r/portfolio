import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import deneyap_icon from "../assets/images/deneyap.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function DeneyapAero() {
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
                  <h1>{`AVIATION & SPACE TECHS`}</h1> 
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
                  <p>With Aviation and Space Technologies training, the development of aviation from past to present in the world and in Turkey, types of aircraft and basic aircraft flight principles are explained. Then, basic model aircraft applications for UAV systems, which our country is becoming more and more popular in the world day by day, are shown.</p>
                  <p>Theoretical information about aircraft propulsion systems and avionics systems is given, and sample applications such as engine thrust measurements and the Fly by Wire system are carried out in the workshop environment using the Deneyap Card. Students model an aircraft in an open source simulation environment and create a UAV sample application controlled by the robotic operating system ROS commands. In the space dimension of the course, rocket systems that allow us to reach space are introduced and a model rocket that can reach an altitude of up to 100 m is designed. Studies on satellite systems in our country and around the world are explained, staying in orbit, energy consumption of the satellite and communication technologies, which are its main elements, are mentioned. For this purpose, a small model of the communication between the satellite ground station is carried out in a workshop environment by using Deneyap Card.</p>
                  <p>As a result of the course, you will gain the knowledge and skills to design and simulate a basic aircraft with its main components and to build a small UAV or rocket system. The course lasts 12 weeks. At the end of the course, they develop a research-based project.</p>
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