import React, { useEffect, useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import {
  doLogout,
  getCurrentUserDetail,
  isLoggedIn,
} from "../../authentication/index.js";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./OwnerAfterLoginNav.css";

const OwnerAfterLoginNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const [name, setName] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
  }, login);

  const logout = () => {
    doLogout(() => {
      // logged out
      setLogin(false);
      toast.success("Do Visit Again !!");
      navigate("/");
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-3">
        <NavbarBrand tag={ReactLink} to="/">
          <img
            className="img"
            style={{
              height: 60,
              width: 60,
            }}
            src={require("./logo.png")}
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/owner/dashboard">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/owner/profile">
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/owner/myprops">
                My Properties
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to="/services">
                  Contact Us
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>LinkedIn</DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/owner/profile">
                    {localStorage.getItem("name")}
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={logout} className="pointer">
                    Logout
                  </NavLink>
                </NavItem>
              </>
            )}

            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Login / SignUp
                  </NavLink>
                </NavItem>
              </>
            )}

            {/* {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/customer/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/customer/register">
                    SignUp
                  </NavLink>
                </NavItem>
              </>
            )} */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default OwnerAfterLoginNav;
