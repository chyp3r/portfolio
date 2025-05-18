import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import cplus from "../assets/icons/cplus.svg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function BBM203() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="hubanner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Software Laboratory 1</span>
                  <h1>{`BBM 203`}</h1>
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
                  <p>Fundamentals of data structures. Relationships between data representation, algorithm design, and program efficiency. Lists, stacks, queues, trees, priority queues, hashing, graphs. Multi-dimensional/triangular/band/sparse matrix representations. Single/double (circular) linked lists. Prefix/infix/postfix expressions.</p>
<p>The laboratory includes three or more practical assignments. The students are expected to present a well-designed documentary report with their assignments. The utilization of compilers, package programs and recent IDEs (Integrated Development Environments) are included in this laboratory.
                  </p>
                  <p>When the course ends, the source codes of all assignments will be added to Github.</p>
                  <div className="social-icon">
                    <a href="https://github.com/chyp3r/HUCS-BBM203"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={cplus} className='projectpage-imgbx' />
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