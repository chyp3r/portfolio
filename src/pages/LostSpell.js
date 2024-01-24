import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import lostspell_icon from "../assets/images/lostspell.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
export default function LostSpell() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Half Games Present</span>
                  <h1>{`LOST SPELL`}</h1>
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
                  <p>A world named Half World which contains various supernatural beings such as witches, elfs, werewolves etc. In this world, there are some conflicts between witch covens and because of them, our main character has to do some missions</p>
                  <p>In this new generation 2D Roguelike Platformer game, you will push the limits of your wizarding abilities, delve into the mysteries of the Half World world, and embark on a great adventure to achieve your ultimate goal.</p>
                  <p>With you in the first quarter of 2025</p>
                  <p>*Proper names and images used on this page have been used instead of the originals for project confidentiality. Names and pictures will be updated when the game is released.</p>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={lostspell_icon} className='projectpage-imgbx' />
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