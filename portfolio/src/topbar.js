import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Nav } from "tabler-react";

class Navbar extends Component {
  render() {
    return (
        <Nav>
            <Nav.Item to="http://www.example.com">Home</Nav.Item>
            <Nav.Item to="http://www.example.com">Github</Nav.Item>
            <Nav.Item to="http://www.example.com">LinkedIn</Nav.Item>
            <Nav.Item to="http://www.example.com">Medium</Nav.Item>
        </Nav>
    );
  }
}

export default Navbar;