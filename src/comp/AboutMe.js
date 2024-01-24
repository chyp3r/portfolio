import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const AboutMe = () => {

  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <div className="skill-bx">
          <Row className="aligh-items-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Alien Detected</span>
                  <h1>{`Gökdeniz Kuruca`}</h1>
                  <p>I'm Gökdeniz and my passion revolves around anything technology. It's fascinating how artificial intelligence has deeply piqued my interest,and most noteworthy of them all. Yet there's more than just AI in this tech world- from mobile app development that’s challenging yet thrilling, game buildouts as creative outlets, making slick desktop applications for those serious about their workspace to tinkering devices electronics mesmerizes me or the crazy robotics.</p>
                  <p>I have been trying to improve myself in many areas for years. During my years of learning, I worked with many different technologies and developed many different projects. You can find the details on this site.</p>
                  <p>I am one of the 2022 graduates of Deneyap Technology Workshops. The training I received at Deneyap Technology Workshops equipped me with the ability to amalgamate practical knowledge with theoretical understanding. These workshops laid a strong foundation for me to keep up with the rapid evolution of the technology landscape.</p>
                  <p>I am also a part of the ACM Hacettepe Student Community. I am a member of the R&D unit in this community, which consists of many sub-units, and I am actively the Teknofest Teams Director.</p>
                  <p>I am presently pursuing my studies at Hacettepe University, consistently striving to enhance my skills. Concurrently, I am engaged as an Instructor and Mentor at Deneyap Technology Workshops, where I seize the opportunity to guide the technology leaders of tomorrow.</p>
                </div>}
            </TrackVisibility>
          </Row>
        </div>
      </Container>
    </section>
  )
}
