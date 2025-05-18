import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import modelteknofest_icon from "../assets/images/model.jpg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import psiteknofest24_icon from "../assets/images/cbrn.png"


export default function CBRN() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">HUCGLAB</span>
                  <h1>{"VR Based Education Platform"}</h1>
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
                  <span className="tagline">About Project</span>
                  <p>This project is a <strong>scenario-based, modular training simulation platform</strong> designed to support the education of teams involved in crisis management and emergency response operations. The flexible structure allows for easy integration of different scenarios, enabling users to enhance their decision-making, analysis, and intervention skills in realistic environments.</p>

<p>The <strong>first scenario</strong> developed for the platform focuses on a Chemical, Biological, Radiological, and Nuclear (CBRN) incident. It was designed to demonstrate the system’s capabilities and how it can provide effective training in high-risk situations.</p>

<p>The platform was originally developed as part of a <strong>senior capstone project</strong> at our university. I joined the team <strong>voluntarily as a second-year student</strong>, contributing to the <strong>design of simulation environments</strong> and the development of <strong>AI-assisted decision support modules</strong>.</p>


                  <div className="social-icon">
                    {/* <a href="https://github.com/chyp3r"><img src={github_icon} alt="" /></a> */}
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={psiteknofest24_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Footer></Footer>
    </div>
  )
}