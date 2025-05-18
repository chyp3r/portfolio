import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import kf_icon from "../assets/images/kf.png"
import photo1 from "../assets/images/kf/1.png"
import photo2 from "../assets/images/kf/2.png"
import photo3 from "../assets/images/kf/3.png"
import photo4 from "../assets/images/kf/4.png"
export default function kf24() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Hacettepe Career Fair</span>
                  <h1>{"v2025"}</h1>
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

<p>I contributed as a mobile application developer for the official <strong>Hacettepe Career Fair</strong>, one of the largest university career events in Türkiye, attended by over <strong>15,000 visitors and 150 companies</strong>.</p>

<p>In this year's version of the project, the mobile app was <strong>completely redesigned and rebuilt</strong> using <strong>Flutter and Firebase</strong>. Several new features were implemented to improve user experience, including live event tracking, company filters, personalized schedules, and real-time notifications.</p>

<p>Thanks to these enhancements, the fair experienced a <strong>25% increase in visitor engagement</strong> compared to the previous year.</p>
<div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '10px' }}>
  <a
    href="https://play.google.com/store/apps/details?id=org.acmhacettepe.kariyer_fuari_app"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#transparent',
      color: 'white',
      padding: '10px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold'
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Google Play"
      style={{ height: '48px' }}
    />
  </a>

  <a
    href="https://apps.apple.com/us/app/hu-kariyer-fuar%C4%B1/id1498792896"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'transparent',
      color: 'white',
      padding: '10px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold'
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
      alt="App Store"
      style={{ height: '48px' }}
    />
  </a>
</div>


                 
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={kf_icon} className='projectpage-imgbx' />
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