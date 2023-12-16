import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import enyaroyis_icon from "../assets/images/enyaroyis.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import itchio_icon from "../assets/icons/itchio.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import photo1 from "../assets/images/quantum/1.png"
import photo2 from "../assets/images/quantum/2.png"
import photo3 from "../assets/images/quantum/3.png"
import photo4 from "../assets/images/quantum/4.png"
import quantum_icon from "../assets/images/quantumlogo.jpg"

export default function QuantumShift() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Your Biggest Enemy: The Cat</span>
                  <h2>{`QUANTUM SHIFT`}</h2>
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
                  <p>The year is 2127. People are faced with a relentless disease called Quantum Shift. The lethality rate of the disease is very high. This is because it is the main symptom of the disease. Constantly teleporting to different places! Humanity's only weapon against this disease is a watch they have developed. So what happens if a Quantum Shift patient loses this watch?</p>
                  <p>Join our main character on his journey to get back his clock in this 2D platformer puzzle game. But this journey will not be easy. Constantly attacking robots, endless teleportation crises and many other obstacles will try to stop you. So, will you be able to defeat this disease or will you be the last victim of the disease?</p>
                  <p>Developed for HUJAM23. Only avaible on Itch.io</p>
                  <div className="social-icon">
                    <a href="https://chyp3r.itch.io/quantum-shift"><img src={itchio_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={quantum_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ProjectPhoto photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} count={2}></ProjectPhoto>
      <Footer></Footer>
    </div>
  )
}