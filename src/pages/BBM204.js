import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import java_icon from "../assets/icons/java.svg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function BBM204() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="hubanner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Software Laboratory 2</span>
                  <h1>{`BBM 204`}</h1>
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
                  <p>Basic concepts of algorithms. Asymptotic notation, performance measurement, space/time complexity. Recursive algorithms, recursive relations, introduction to the concept of algorithm analysis. Binary search tree, recursive and iterative binary tree traversals. Graphs, depth/breadth first search, spanning trees, shortest path problem, activity on vertex/edge networks. Selection, insertion, bubble, counting, quick, merge, heap, radix sorting algorithms and their analysis.</p>
<p>The laboratory includes three or more practical assignments. The students are expected to present a well-designed documentary report with their assignments. Compilers, package programs and recent IDEs (Integrated Development Environments) are utilized in this laboratory.
                  </p>
                  <p>When the course ends, the source codes of all assignments will be added to Github.</p>
                  <div className="social-icon">
                    <a href="https://github.com/chyp3r"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={java_icon} className='projectpage-imgbx' />
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