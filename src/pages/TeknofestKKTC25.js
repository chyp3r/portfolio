import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import modelteknofest_icon from "../assets/images/model.jpg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import iytteknofest24_icon from "../assets/images/kktc25.jpg"

export default function kktc25() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Teknofest KKTC 2025</span>
                  <h1>{"BabaMisu"}</h1>
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

<p>As part of the BabaMisu project, I developed Convolutional Neural Network (CNN)-based models for the classification of plant diseases into four categories using leaf images. Throughout the development process, I applied data augmentation, regularization techniques, and hyperparameter tuning, ultimately achieving an <strong>F1 score of 0.82</strong>.</p>

<p>The trained model was integrated into a <strong>Flutter and Firebase-based mobile application</strong>, enabling real-time, on-field disease detection and diagnosis for farmers and agricultural professionals.</p>

<p>Our team successfully completed all project phases including documentation and presentation, and the project <strong>qualified for the finals of Teknofest 2025</strong>.</p>
                  <div className="social-icon">
                    <a href="https://cdn.t3kys.com/media/uploads/2025/03/28/O119eWys4lvstAu2IMH9Jwz7gesI5LAl.pdf"><img src={github_icon} alt="" /></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={iytteknofest24_icon} className='projectpage-imgbx' />
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