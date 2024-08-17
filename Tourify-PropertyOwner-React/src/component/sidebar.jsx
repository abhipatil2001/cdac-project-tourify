import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
} from 'reactstrap';
import { useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'nav-link-custom active' : 'nav-link-custom';
  };

  return (
    <Navbar
      className={`navbar-vertical fixed-left navbar-light bg-white ${expanded ? 'expanded' : 'collapsed'}`}
      expand="md"
      id="sidenav-main"
      style={{ width: expanded ? "250px" : "80px", transition: "width 0.3s" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-between w-100">
        <NavbarBrand className="pt-0">
          <p className={`h1 text-primary font-weight-bold nav-text ${expanded ? '' : 'd-none'}`}>Tourify</p>
        </NavbarBrand>
        <Button className="toggle-btn " onClick={() => setExpanded(!expanded)}>
          <i className={`ni ${expanded ? 'ni-bold-right' : 'ni-bold-left'}`} />
        </Button>
      </div>
      <Collapse isOpen={expanded} navbar>
        <Nav className="flex-column navbar-nav" navbar>
          <NavItem className="nav-item">
            <NavLink href="/home" className={getNavLinkClass('/home')}>
              <i className="ni ni-tv-2 text-primary mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Dashboard</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/profile" className={getNavLinkClass('/profile')}>
              <i className="ni ni-single-02 text-yellow mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Profile</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/add-property" className={getNavLinkClass('/add-property')}>
              <i className="ni ni-calendar-grid-58 text-orange mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Add Property</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/view-bookings" className={getNavLinkClass('/view-bookings')}>
              <i className="ni ni-support-16 text-green mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>View Bookings</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/logout" className={getNavLinkClass('/logout')}>
              <i className="ni ni-user-run text-red mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Logout</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sidebar;
