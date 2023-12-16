import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import project_icon from "../assets/images/q.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function ProjectQ() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Past, Now or Future</span>
                  <h1>{`PROJECT Q`}</h1>
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
                  <p>1c ad 70 b3 cc c8 bf f7 81 60 93 97 b3 da 64 e5 66 1f 4b 78 2d d2 bc 12 14 3d 50 92 95 8e 9f 71 17 74 b1 a7 99 97 a6 f1 63 15 5d 8e d0 23 f3 0b e0 c9 20 a8 3a d8 eb 01 3e 34 de b8 f8 99 8e 56</p>
                  <p>d0 5c 63 bc d9 55 ae d4 e7 ce 7e 11 9b d7 ac c1 ae 89 ce be d7 af 5f d6 5c 27 65 43 b7 48 d0 f0 40 03 12 64 83 e8 af 35 4f f8 7c 16 bf 1b 1d 10 f8 de 89 93 5e 2d 40 2e eb 30 7b 4d 75 bb 39 2a</p>
                  <div className="social-icon">
                    <a href="https://github.com/chyp3r"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={project_icon} className='projectpage-imgbx' />
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