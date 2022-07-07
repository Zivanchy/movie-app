import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <Nav className="row align-items-center justify-content-between flex-nowrap stick-top bg-secondary">
      <Nav.Item className="col-auto text-light mx-5" as="h1">
        <Link
          to="/"
          className="link-warning"
          style={{ textDecoration: 'none' }}
        >
          Movie App
        </Link>
      </Nav.Item>
      <Nav.Item className="col-6 ml-auto"></Nav.Item>
    </Nav>
  );
};

export default Navbar;
