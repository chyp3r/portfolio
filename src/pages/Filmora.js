import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import saglikteknofest24_icon from "../assets/images/filmora/Resim1.png"
import photo1 from "../assets/images/filmora/1.png"
import photo2 from "../assets/images/filmora/2.png"
import photo3 from "../assets/images/filmora/5.png"
import photo4 from "../assets/images/filmora/6.png"
export default function Filmora() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Future of the Movies</span>
                  <h1>{"Filmora"}</h1>
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

<p>Developed during the OBSS 2025 Codecamp internship, Filmora is an iOS application designed for seamless movie discovery and interactive AI conversation. Built on the MVVM architecture, the app leverages the TMDB API to fetch extensive movie data—including Hero showcases, popular charts, and detailed cast information—while utilizing Moya for robust networking.</p>

<p>Beyond standard exploration, the application features a personalized favorites system and integrates the Gemini API to power a unique "Movie Chat" experience. This feature allows users to engage in AI-driven discussions about films, explore popular topics, and receive intelligent recommendations within a dedicated interface.</p>

                  <div className="social-icon">
                    <a href="https://github.com/chyp3r/Filmora"><img src={github_icon} alt="" /></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={saglikteknofest24_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ProjectPhoto photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4} count={1}></ProjectPhoto>
      <Footer></Footer>
    </div>
  )
}