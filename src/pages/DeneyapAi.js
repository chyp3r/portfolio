import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import deneyap_icon from "../assets/images/deneyap.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function DeneyapAi() {
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
                  <h1>{`AI`}</h1>
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
                  <p>The aim of the training is to raise awareness about how artificial intelligence can be used in different fields, to create a vision about the future of this subject by making applications to make the developed projects autonomous, and to lay the foundation of artificial intelligence if students want to specialize in this field.</p>
                  <p>Training is provided on concepts such as data, big data, machine learning, applications with Python programming language, artificial intelligence neural networks, deep learning, intelligent optimization, decision trees. The course lasts 8 weeks. It is expected to develop a research-based project at the end of the course.</p>
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