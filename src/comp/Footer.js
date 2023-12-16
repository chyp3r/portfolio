import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col></Col>
          <Col size={2} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div> */}
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
