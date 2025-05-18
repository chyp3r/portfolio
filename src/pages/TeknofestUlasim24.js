import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import modelteknofest_icon from "../assets/images/model.jpg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import ulasimteknofest24_icon from "../assets/images/teknofestulasim24/cover.jpg"

export default function TeknofestUlasim24() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Teknofest Artificial Intelligence in Transportation 2024</span>
                  <h1>{"Han-Yolo"}</h1>
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

<p>In the Han-Yolo project, I worked as a computer vision developer focusing on enhancing real-time object detection capabilities for aerial images captured by drone cameras. The core of the system was built on an optimized <strong>YOLOv8 architecture</strong>, tailored for detecting objects in high-resolution drone footage under varying environmental conditions.</p>

<p>One of the key innovations in this project was the use of a <strong>SLAM (Simultaneous Localization and Mapping)</strong> approach to determine object positions using only visual data — without relying on GPS. This made the system more adaptable and effective in GPS-denied or constrained environments, such as disaster zones or military applications.</p>

<p>The AI pipeline was implemented using a combination of <strong>PyTorch</strong> and <strong>TensorFlow</strong>, while tools like <strong>Roboflow</strong> were used for data preprocessing and augmentation. Development and training processes were carried out in a <strong>WSL (Windows Subsystem for Linux)</strong> environment to ensure compatibility and performance.</p>

                  <div className="social-icon">
                    <a href="https://cdn.t3kys.com/media/upload/user_form_upload/2024/4/30/GzZXlFg468vZwhN4yjOcWCP1ng3z9hMf.pdf"><img src={github_icon} alt="" /></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={ulasimteknofest24_icon} className='projectpage-imgbx' />
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