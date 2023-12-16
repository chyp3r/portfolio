import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import modelteknofest_icon from "../assets/images/model.jpg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function TeknofestUydu() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Teknofest Model Satellite Compettion 2024</span>
                  <h1>{"SOFI"}</h1>
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
                  <p>The Model Satellite competition, organized every year by Türksat under the umbrella of TEKNOFEST, aims to provide undergraduate and graduate engineering students with experience in the development process of a satellite and to gain interdisciplinary working skills by putting theoretical knowledge into practice.</p>
                  <p>A model satellite is being developed for the 2024 Model Satellite competition within ACM Hacettepe.</p>
                  <p>This page will be updated as the competition progresses.</p>
                  <div className="social-icon">
                    {/* <a href="https://github.com/chyp3r"><img src={github_icon} alt="" /></a> */}
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={modelteknofest_icon} className='projectpage-imgbx' />
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