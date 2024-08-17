import { Col, Nav, NavItem,  NavLink, Row } from "react-bootstrap"

function Footer(){
    return(
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col className="col">
          <div className="copyright text-center text-xl-left text-muted">
            @{new Date().getFullYear()}{" "}
            <a 
             className="font-weight-bold ml-1"
             href="#"
             target="_blank"
             >
              Tourify
             </a>
          </div>
          </Col>

          <Col className="col">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
              href="#"
              target="_blank"
              >
                Tourify
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
              href="#"
              target="_blank"
              >
              About us
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
              href="#"
              target="_blank"

              >
               Contact Us
              </NavLink>
            </NavItem>

          </Nav>
          </Col>

        </Row>
      </footer>
    )
}  

export default Footer;