import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import enyaroyis_icon from "../assets/images/enyaroyis.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import photo1 from "../assets/images/enyaroyis/enyaroyis1.png"
import photo2 from "../assets/images/enyaroyis/enyaroyis2.png"
import photo3 from "../assets/images/enyaroyis/enyaroyis3.png"
import photo4 from "../assets/images/enyaroyis/enyaroyis4.png"
export default function Enyaroyis() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">How wrong could it go?</span>
                  <h1>{`ENYAROYIS`}</h1>
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
                  <p>What's the most that could happen while you're sitting on your balcony quietly reading your book on a hot July day? Except, of course, when you suddenly get swallowed by the portal your friend made and find yourself in an icy land filled with green creatures.</p>
                  <p>Embark on a long adventure to return home in "Enyaroyis", a 2D action RPG. Make new friends, fight with green creatures and do your best despite all the difficulties of the game to reach one of 4 different endings.</p>
                  <p>Although only one copy was produced since it was a "very special production" game, you can view the gameplay footage below.</p>
                  <div className="social-icon">
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={enyaroyis_icon} className='projectpage-imgbx' />
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