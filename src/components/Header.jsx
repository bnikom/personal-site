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
           <img src="images/bella_logo.png" className="logo" alt="Bella Logo" />
          }
        </NavbarBrand>
        <NavbarToggler onClick={() => setCollapsed(!collapsed)} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/resume" className="pl-2">Moi Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/map" className="pl-2">Where have I gone?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.whatsyourshare.ink" target="_blank" rel="noopener noreferrer" className="pl-2">What's your share?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/charities" className="pl-2">Charities ~~~~</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;