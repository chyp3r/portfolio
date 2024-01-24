import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import vitabyte_icon from "../assets/images/V1.png"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import { ProjectPhoto } from '../comp/ProjectPhoto';
import TrackVisibility from 'react-on-screen';
import photo1 from "../assets/images/vitabyte/vitabyte1.png"
import photo2 from "../assets/images/vitabyte/vitabyte2.png"
import photo3 from "../assets/images/vitabyte/vitabyte3.png"
import photo4 from "../assets/images/vitabyte/vitabyte4.png"
export default function Vitabyte() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Artificial Intelligence Supported Wellness</span>
                  <h1>{`VITABYTE`}</h1>
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
                  <p>Vitabyte is a Deneyap Graduation Project. The main purpose of the application is to prepare the most suitable diet lists for them by blending the health and request information entered by the user.</p>
                  <p>The feature that distinguishes this application from its equivalents is undoubtedly its advanced artificial intelligence network. Unlike other applications, Vitabyte does not use standard diet lists. As a result of the mixture of your personal health information and expectations, the advanced artificial intelligence system will prepare the most suitable diet list for you.</p>
                  <p>In addition to preparing a diet list, the application also includes functional features such as calorie intake tracking, recipes, sports tracking, suggestions, and social features such as the profile section.</p>
                  <p>Since the application was developed as a Deneyap Graduation Project, it has not been publicly published after its development, but you can access the latest status report of the application from the button below.</p>
                  <div className="social-icon">
                    <a href="https://cdn.t3kys.com/media/upload/userFormUpload/yayv3zXwkot5BJuOR8gY83nKnt3yQPWs.pdf"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={vitabyte_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ProjectPhoto photo1={photo1} photo2={photo2} photo3={photo3} photo4={photo4}></ProjectPhoto>
      <Footer></Footer>
    </div>
  )
}