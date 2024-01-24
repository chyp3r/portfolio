import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import hocusfocus_icon from "../assets/images/hocusfocus.png"
import { Footer } from '../comp/Footer';
import googleplay_icon from "../assets/icons/googleplaystore.png"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import photo1 from "../assets/images/hocusfocus/hocusfocus1.png"
import photo2 from "../assets/images/hocusfocus/hocusfocus2.png"
import photo3 from "../assets/images/hocusfocus/hocusfocus3.png"
import photo4 from "../assets/images/hocusfocus/hocusfocus4.png"
export default function HocusFocus() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">For Focus Use Hocus</span>
                  <h1>{`HOCUS FOCUS`}</h1>
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
                  <p>Hocus Focus is an application that helps solve the increasing screen time and addiction in the world with a fun method, gamification. Hocus Focus, which rewards you by doing "hocus focus" during this time away from the screen at intervals such as 15-30-60-120 minutes, determined by the World Health Organization, and offers a social experience by sharing it with your other friends, especially while reading a book, eating, or doing something productive. It aims to provide solutions to the questions of how we can manage these screens that divide us.</p>
                  <div className="social-icon">
                    <a href="https://play.google.com/store/apps/details?id=com.gamfed.hocusfocus"><img src={googleplay_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={hocusfocus_icon} className='projectpage-imgbx' />
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