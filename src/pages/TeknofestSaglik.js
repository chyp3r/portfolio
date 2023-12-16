import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import saglikteknofest_icon from "../assets/images/teknofestsaglik.jpg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
import { ProjectPhoto } from '../comp/ProjectPhoto';
import photo3 from "../assets/images/teknofestai23/ai23-3.png"
import photo4 from "../assets/images/teknofestai23/ai23-4.png"
import photo1 from "../assets/images/teknofestai23/ai23-1.png"
import photo2 from "../assets/images/teknofestai23/ai23-2.png"
export default function TeknofestSaglik() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="pbanner" id="home">
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Teknofest Artificial Intelligence in Health Compettion 2023</span>
                  <h2>{`ASCLEPIUS`}</h2> 
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
                  <p>The aim of the project is to develop software that can analyze mammography images, which plays an important role in the field of healthcare. As the first step of the project, a literature review was conducted and existing research and methods were examined. The first stage report was prepared with this information.</p>
                  <p>In the second stage, different artificial intelligence architectures were tested and the performance of these architectures was evaluated. Moreover, the results obtained using different algorithms are constantly improved. The second phase report was created with the results of all these studies. In this report, the successes and potential of the developed software are explained in detail.</p>
                  <p>After all these report stages, the project ranked 9th in Turkey in the report rankings and the second stage was successfully completed. Later, the project moved to the final stage and competed at Teknofest held in Istanbul.</p>
                  <div className="social-icon">
                    <a href="https://cdn.t3kys.com/media/upload/userFormUpload/ZIeW000CS783X0UbNeHizBhZzYGVkpb4.pdf"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={saglikteknofest_icon} className='projectpage-imgbx' />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ProjectPhoto photo1={photo3} photo2={photo4} photo3={photo1} photo4={photo2} count={2}></ProjectPhoto>
      <Footer></Footer>
    </div>
  )
}