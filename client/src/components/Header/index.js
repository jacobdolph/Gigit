import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Logo from "../../gigitAssets/images/logo-w-min.png";
import { useAuth0 } from "../../react-auth0-spa";
import Auth from "../../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='navbar'>
      <Navbar.Brand>
        <Link to={"/"}>
          <img
            src={Logo}
            width='auto'
            height='40'
            className='d-inline-block align-top'
            alt='gig it logo'
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          {!Auth.loggedIn() ? (
            <Nav.Link>
              <Link className='headerLinks' to='/signin'>
                Log in
              </Link>
            </Nav.Link>
          ) : (
            <div className='navList'>
              <Nav.Link>
                <Link to='/home' className='headerLinks'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/gigs' className='headerLinks'>
                  Gigs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/profile' className='headerLinks'>
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/' className='headerLinks' onClick={logout}>
                  Log out
                </Link>
              </Nav.Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
