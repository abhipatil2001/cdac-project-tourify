import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { Nav, Container, DropdownToggle, Navbar, NavItem, NavLink } from "reactstrap";
// import { Container, Form, FormGroup, InputGroup, InputGroupAddon, Navbar, NavItem, NavLink } from "react-bootstrap";
import { Input, Media, UncontrolledDropdown, DropdownMenu, DropdownItem} from "reactstrap";
function PropOwnerNavbar(){
   // read the cart state
    // navigate object
    const navigate = useNavigate()

    const onLogout = () => {
        // clear the session storage
        // sessionStorage.removeItem('token')
        // sessionStorage.removeItem('name')
    
        // set the login status to false
    
        // navigate to login page
        navigate('/login')
      }
return(
  <>
  <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
    <Container fluid>
      {/* <NavItem>   --> dashboard es gettting slid dot as a ul*/}
        <NavLink className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
          Dashboard
        </NavLink>
      {/* </NavItem> */}
      
      <Nav className="align-items-center d-md-flex" navbar>
      <UncontrolledDropdown>
        <DropdownToggle tag="a" className="pr-0 nav-link">
          <Media className="align-items-center">
            <span className="avatar avatar-sm rounded-circle">
              <img
                alt="..."
                src={require("../assets/img/theme/img2.png")}
              />
            </span>
            <Media className="ml-2 d-lg-block">
              <span className="mb-0 text-sm font-weight-bold">
                Property Owner
              </span>
            </Media>
          </Media>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
        {/* Add DropdownMenu and DropdownItem components here if needed */}
      </UncontrolledDropdown>
    </Nav>
    </Container>
  </Navbar>
  </>
 )
 }

export default PropOwnerNavbar;