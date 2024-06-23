import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import alzcur_icon from "../assets/images/alzcur2.png"
import { Footer } from '../comp/Footer';
import itchio_icon from "../assets/icons/itchio.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import photo1 from "../assets/images/alzcur/1.png"
import photo2 from "../assets/images/alzcur/2.png"
import photo3 from "../assets/images/alzcur/3.png"
import photo4 from "../assets/images/alzcur/2.png"

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
                  <span className="tagline">Alea Iacta Est</span>
                  <h1>{`ALZCUR`}</h1>
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
                  <p>In pursuit of understanding the boundless potential of human intellect, scientists have birthed Alzcur, an enigmatic entity designed to identify and engage with the world's brightest minds. Disguised within the captivating facade of a puzzle game, Alzcur has inadvertently transformed every participant into an unwitting subject of its experiments.</p>
                  <p>In this cryptological puzzle game, prepare yourself for an odyssey unlike any other, where the line between reality and illusion blurs, and the fate of humanity hangs in the balance. Will you emerge victorious from the clutches of Alzcur, or become yet another pawn in its enigmatic game? The choice is yours to make, as you navigate the labyrinth of the mind.</p>
                  <p>Only avaible on Itch.io</p>
                  <div className="social-icon">
                    <a href="https://chyp3r.itch.io/alzcur"><img src={itchio_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={alzcur_icon} className='projectpage-imgbx' />
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