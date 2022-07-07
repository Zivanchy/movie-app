import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <Nav className="row align-items-center justify-content-between flex-nowrap stick-top bg-secondary">
      <Nav.Item className="col-auto text-light mx-5" as="h1">
        Movie App
      </Nav.Item>
      <Nav.Item className="col-6 ml-auto"></Nav.Item>
    </Nav>
  );
};

export default Navbar;
