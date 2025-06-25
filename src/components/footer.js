import { useState } from 'react';

import IMG1 from '../img/property-1.jpg';
import IMG2 from '../img/property-2.jpg';
import IMG3 from '../img/property-3.jpg';
import IMG4 from '../img/property-4.jpg';
import IMG5 from '../img/property-5.jpg';
import IMG6 from '../img/property-6.jpg';

import LOGO from '../img/logo.png';
import LOGODARK from '../img/logo-dark.png';

function Footer() {

    const [light, setLight] = useState(() => {
        const storedLight = localStorage.getItem('light');
        return storedLight ? parseInt(storedLight, 10) : 1; // Default to 1 if no value in localStorage
    });

    return (
      <>
        <div className="container-fluid bg-dark text-white-50 footer pt-1" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <img style={{width: '150px'}} src={light === 1 ? LOGO : LOGODARK} alt="" />
                        <br/><br/>
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Dhanmondi 26/A, Bangladesh</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+88019XXXXXXXX</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>sample@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" style={{textDecoration: 'none'}} href="">About Us</a>
                        <a className="btn btn-link text-white-50" style={{textDecoration: 'none'}} href="">Contact Us</a>
                        <a className="btn btn-link text-white-50" style={{textDecoration: 'none'}} href="">Our Services</a>
                        <a className="btn btn-link text-white-50" style={{textDecoration: 'none'}} href="">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" style={{textDecoration: 'none'}} href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={IMG1} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={IMG2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={IMG3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={IMG4} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={IMG5} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src={IMG6} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                            <input className="form-control bg-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button style={{background: '#52AA5E', color: '#fff', border: 'none'}} type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a style={{textDecoration: 'none'}} href="#">Land Hub</a>, All Right Reserved. 
							
							
							Developed By Fardin Ahmed Shawon
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a style={{textDecoration: 'none'}} href="">Home</a>
                                <a style={{textDecoration: 'none'}} href="">Cookies</a>
                                <a style={{textDecoration: 'none'}} href="">Help</a>
                                <a style={{textDecoration: 'none'}} href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Footer;