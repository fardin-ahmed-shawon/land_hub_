import { Link } from 'react-router-dom';
import LOGO from '../img/logo.png';

function Navbar() {
    return (
      <>
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="/">
                    <a href="" className="navbar-brand d-flex align-items-center text-center">
                        <img className="img-fluid" src={LOGO} alt="Icon" style={{width: '180px'}} />
                    </a>
                </Link> 
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/">
                            <a href="" className="nav-item nav-link active">Home</a>
                        </Link>
                        <Link to="/about-info">
                            <a href="" className="nav-item nav-link">About</a>
                        </Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Buy Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                            <Link to='/properties'>
                                <a href="" className="dropdown-item">Land</a>
                                <a href="" className="dropdown-item">Villa</a>
                                <a href="" className="dropdown-item">Apartment</a>
                                <a href="" className="dropdown-item">Penthouse</a>
                            </Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sell Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                            <Link to='/properties'>
                                <a href="" className="dropdown-item">Land</a>
                                <a href="" className="dropdown-item">Villa</a>
                                <a href="" className="dropdown-item">Apartment</a>
                                <a href="" className="dropdown-item">Penthouse</a>
                            </Link>
                            </div>
                        </div>

                        <Link to='/agents'>
                            <a href="" className="nav-item nav-link">Agents</a>
                        </Link>

                        <Link to='/clients'>
                            <a href="" className="nav-item nav-link">Clients</a>
                        </Link>

                        <Link to='/contact'>
                            <a href="" className="nav-item nav-link">Contact</a>
                        </Link>

                    </div>
                    
                    <Link to='/add-property'>
                        <a href="" className="btn btn-outline-primary px-3 py-2 d-none d-lg-flex"><b>Add Property</b> <i className="px-1 bi bi-folder-plus"></i></a>
                    </Link>

                    <Link to='/login'>
                        <a href="" className="btn btn-primary px-3 py-2  mx-3 d-none d-lg-flex"><b>Account</b> <i className="px-1 bi bi-person"></i></a>
                    </Link>
                </div>
            </nav>
        </div>
      </>
    );
  }
  
  export default Navbar;
