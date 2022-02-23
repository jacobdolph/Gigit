import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Logo from "../../gigitAssets/images/logo-w-min.png";
import Auth from "../../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='navbar'>
      <Navbar.Brand>
        <Link to='/'>
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
            <Link to={"/signin"} className='headerLinks'>
              Log in
            </Link>
          ) : (
            <div className='navList'>
              <Link to='/home'>Home</Link>
              <Link to='/gigs'>Gigs</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/' onClick={logout}>
                Log out
              </Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
