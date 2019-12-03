import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = ({ GDIMPoff }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          {GDIMPoff ?
            <div className="slogan">
              <h1 className="first">BELLA NIKOM</h1>
              <h1 className="second">BELLA NIKOM</h1>
              <h1 className="third">BELLA NIKOM</h1>
            </div>
            :
            <h1>BELLA NIKOM</h1>
          }
        </NavbarBrand>
        <NavbarToggler onClick={() => setCollapsed(!collapsed)} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/map">Where have I gone?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/charities">Charities ~~~~</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;