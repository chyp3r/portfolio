import { Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="navbar-text">
            <Link to={description}>
              <button type="button" className="vvd"><span>Details</span></button>
            </Link>
          </span>
        </div>
      </div>
    </Col>
  )
}
