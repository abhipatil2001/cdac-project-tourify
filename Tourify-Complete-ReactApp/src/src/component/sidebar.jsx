import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
} from 'reactstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';
import { doLogout,
        isLoggedIn,
 } from '../../authentication';
import { toast } from 'react-toastify';
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  //for logout purpose
  const [login, setLogin] = useState(false);
  useEffect(()=>{
   setLogin(isLoggedIn());
  }, login)

  const logout = () =>{
    doLogout(() => {
    // logged out
    setLogin(false);
    toast.success("Do Visit Again !!")
    navigate("/");
    })
  }
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
          <i className={`ni ${expanded ? 'ni-bold-left' : 'ni-bold-right'}`} />
        </Button>
      </div>
      <Collapse isOpen={expanded} navbar>
        <Nav className="flex-column navbar-nav" navbar>
          <NavItem className="nav-item">
            <NavLink href="/owner/dashboard" className={getNavLinkClass('/owner/dashboard')}>
              <i className="ni ni-tv-2 text-primary mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Dashboard</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/owner/profile" className={getNavLinkClass('/owner/profile')}>
              <i className="ni ni-single-02 text-yellow mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Profile</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/owner/add-property" className={getNavLinkClass('/owner/add-property')}>
              <i className="ni ni-calendar-grid-58 text-orange mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>Add Property</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink href="/owner/view-bookings" className={getNavLinkClass('/owner/view-bookings')}>
              <i className="ni ni-support-16 text-green mr-2" />
              <span className={`nav-text ${expanded ? '' : 'd-none'}`}>View Bookings</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink onClick={logout} className='pointer'>
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
