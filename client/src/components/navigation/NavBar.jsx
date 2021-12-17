import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import render from '../../images/render.png';

function NavBar() {

  return (
    <Fragment>

      <Navbar className="Navbar" expand="lg"  >
        <Navbar.Brand href="/" > <img className="d-inline-block align-top" alt ="logo club" width="80" height="80" src={render} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <NavDropdown title="CLUB" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Actualites">ACTUALITES</NavDropdown.Item>
              <NavDropdown.Item href="/PresClub">PRESENTATION DU CLUB</NavDropdown.Item>
              <NavDropdown.Item href="Dojo">LE DOJO</NavDropdown.Item>
              <NavDropdown.Item href="LHT">LICENCES HORAIRES TARIFS</NavDropdown.Item>
              <NavDropdown.Item href="/Infos">INFORMATIONS IMPORTANTES</NavDropdown.Item>


            </NavDropdown>
            <NavDropdown title="ACTIVITES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/PresActiv">PRESENTATION ACTIVITES</NavDropdown.Item>
              <NavDropdown.Item href="/Esprit">ESPRIT JUDO</NavDropdown.Item>
              <NavDropdown.Item href="/Judo">JUDO</NavDropdown.Item>
              <NavDropdown.Item href="/Jujitsu">JUJITSU</NavDropdown.Item>
              <NavDropdown.Item href="/Taiso">TAISO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="/Inscription">INSCRIPTION</Nav.Link>
            <Nav.Link className="nav-link" href="/Connexion">CONNEXION</Nav.Link>
            <Nav.Link className="nav-link" href="/Admin">ADMINISTRATION</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>


  )
}




export default NavBar;
