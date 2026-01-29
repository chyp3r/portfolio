import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import odak_icon from "../assets/images/odak/odak.png"
import photo1 from "../assets/images/odak/1.jpg"
import photo2 from "../assets/images/odak/2.jpg"
import photo3 from "../assets/images/odak/3.jpg"
import photo4 from "../assets/images/odak/4.jpg"


export default function Odak() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Anadolu Agency Media Tech Hackathon</span>
                  <h1>{"ODAK"}</h1>
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
<p>As the team lead and Artificial Intelligence Developer, I contributed to the development of a GenAI news platform designed for automated video generation and content synthesis. The project featured a multi-model pipeline leveraging <strong>GPT, DALL-E, Whisper, Qwen, and Gemini</strong> for multimedia creation, as well as a <strong>PostgreSQL vector recommender</strong> for personalized news delivery.</p>

<p>Our team was awarded <strong>1st Place</strong> at the Anadolu Agency Media Technologies Hackathon, recognized for the system's innovative approach to AI-driven media production.</p>

<p>The project was developed using a <strong>Dockerized Django backend</strong>, integrated with <strong>React</strong> for the web dashboard and <strong>React Native</strong> for the mobile application to ensure a seamless cross-platform experience.</p> <div className="social-icon">
                    <a href="https://github.com/chyp3r/ODAK-Backend"><img src={github_icon} alt="" /></a>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={odak_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ProjectPhoto photo1={photo2} photo2={photo3} photo3={photo4} photo4={photo1} count={2}></ProjectPhoto>
      <Footer></Footer>
    </div>
  )
}