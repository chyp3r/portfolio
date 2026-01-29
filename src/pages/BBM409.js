import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarProject } from '../comp/NavBarProject'
import { Container, Row, Col } from "react-bootstrap";
import pytorch_icon from "../assets/icons/pytorch.svg"
import { Footer } from '../comp/Footer';
import github_icon from "../assets/icons/github.svg"
import TrackVisibility from 'react-on-screen';
export default function BBM409() {
  return (
    <div>
      <NavBarProject></NavBarProject>
      <section className="hubanner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Machine Learning Laboratory</span>
                  <h1>{`BBM 409`}</h1>
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
                  <span className="tagline">About Lesson</span>
                  <p>This course establishes a strong foundation in supervised learning, primarily focusing on a wide array of classification and regression techniques. It progresses from classical algorithms—such as Support Vector Machines (SVMs), logistic regression, and Gaussian discriminant analysis—to advanced deep learning architectures, including Neural Networks, Convolutional Neural Networks (CNNs), and ensemble methods like boosting.</p>
<p>The curriculum also covers essential statistical and unsupervised learning concepts designed to analyze underlying data structures. Key topics include density estimation via Maximum Likelihood Estimation (MLE), dimensionality reduction using Principal Component Analysis (PCA), and data grouping techniques through k-means clustering.
                  </p>
                  <p>When the course ends, the source codes of all assignments will be added to Github.</p>
                  <div className="social-icon">
                    <a href="https://github.com/chyp3r/HUCS-BBM409"><img src={github_icon} alt="" /></a>
                  </div>
                  <div className='space'></div>
                </div>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <div className={""}>
                  <img src={pytorch_icon} className='projectpage-imgbx' />
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