import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
            <div className="container">
                <a className="navbar-brand ts-push-down__50 position-absolute ts-bottom__0 bg-white pb-0 ts-z-index__1 ts-scroll" href="#page-top">
                    <img src="assets/img/logo.png" alt=""/>
                </a>
                {/* <!--end navbar-brand--> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!--end navbar-toggler--> */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-block d-lg-flex ml-auto text-right">
                        <Link className="nav-item nav-link active ts-scroll" to="/home">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link ts-scroll" to="/service">Services</Link>
                        <Link className="nav-item nav-link ts-scroll" to="/about-me">About Me</Link>
                        <Link className="nav-item nav-link ts-scroll" to="/skill">Skills</Link>
                        <Link className="nav-item nav-link ts-scroll" to="#portfolio">Portfolio</Link>
                        <Link className="nav-item nav-link ts-scroll" to="#testimonials">Clients</Link>
                        <Link className="nav-item nav-link ts-scroll " to="#form-contact">Contact</Link>
                    </div>
                    {/* <!--end navbar-nav--> */}
                </div>
                {/* <!--end collapse--> */}
            </div>
            {/* <!--end container--> */}
        </nav>
</div>
  )
}

export default Header