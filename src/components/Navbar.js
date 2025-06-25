import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../img/logo.png';
import FAVICON from '../img/icon.png';
import LOGODARK from '../img/logo-dark.png';

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.nav-bar');
            if (window.scrollY > 45) {
                navbar.classList.add('sticky-top');
            } else {
                navbar.classList.remove('sticky-top');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <>
      <div id="loader">
        <img src={FAVICON} alt="Loading..." />
     </div>
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="bg-transparent navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <a href="" className="navbar-brand d-flex align-items-center text-center">
                        <img className="img-fluid" src={LOGODARK} alt="Icon" style={{width: '180px'}} />
                    </a>
                </Link> 
                <button type="button" className="bg-light navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="bg-light navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <a href="" className="text-light nav-item nav-link active">Home</a>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to="/about-info">
                            <a href="" className="text-light nav-item nav-link">About</a>
                        </Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="text-light nav-link dropdown-toggle" data-bs-toggle="dropdown">Buy Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link style={{ textDecoration: 'none' }} to='/properties'>
                                    <a href="" className="dropdown-item">Land</a>
                                    <a href="" className="dropdown-item">Villa</a>
                                    <a href="" className="dropdown-item">Apartment</a>
                                    <a href="" className="dropdown-item">Penthouse</a>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="text-light nav-link dropdown-toggle" data-bs-toggle="dropdown">Sell Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link style={{ textDecoration: 'none' }} to='/properties'>
                                    <a href="" className="dropdown-item">Land</a>
                                    <a href="" className="dropdown-item">Villa</a>
                                    <a href="" className="dropdown-item">Apartment</a>
                                    <a href="" className="dropdown-item">Penthouse</a>
                                </Link>
                            </div>
                        </div>

                        <Link style={{ textDecoration: 'none' }} to='/agents'>
                            <a href="" className="text-light nav-item nav-link">Agents</a>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/property-type'>
                            <a href="" className="text-light nav-item nav-link">Property Type</a>
                        </Link>

                        <Link style={{ textDecoration: 'none' }} to='/contact'>
                            <a href="" className="text-light nav-item nav-link">Contact</a>
                        </Link>
                    </div>

                    <div>
                        <i style={{cursor: 'pointer'}} class="px-3 bi bi-moon"></i>
                        {/* <i style={{cursor: 'pointer'}} class="px-3 bi bi-brightness-high"></i> */}
                    </div>
                    
                    <Link style={{ textDecoration: 'none' }} to='/add-property'>
                        <a href="" style={{border: '2px solid #52AA5E'}} className="btn px-3 py-2 d-none d-lg-flex"><b>Add Property</b> <i className="px-1 bi bi-folder-plus"></i></a>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <a href="" style={{backgroundColor: '#52AA5E', color: '#fff'}} className="btn px-3 py-2  mx-3 d-none d-lg-flex"><b>Account</b> <i className="px-1 bi bi-person"></i></a>
                    </Link>
                </div>
            </nav>
        </div>
      </>
    );
}

export default Navbar;