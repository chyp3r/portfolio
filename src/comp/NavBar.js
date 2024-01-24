import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import github_icon from "../assets/icons/github.svg"
import linkedin_icon from "../assets/icons/linkedin.svg"
import instagram_icon from "../assets/icons/instagram.svg"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      }
      else {
        seScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onscroll);
  })

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand><p className="text-white">Gökdeniz Kuruca</p></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://github.com/chyp3r"><img src={github_icon} alt="" /></a>
            <a href="https://www.linkedin.com/in/gokdenizkuruca/"><img src={linkedin_icon} alt="" /></a>
            <a href="https://www.instagram.com/gokdeniz_kuruca/"><img src={instagram_icon} alt="" /></a>
          </div>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}