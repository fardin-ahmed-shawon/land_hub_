import LOGO from '../img/logo.png';

function Navbar() {
    return (
      <>
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <img className="img-fluid" src={LOGO} alt="Icon" style={{width: '180px'}} />
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Buy Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="property-list.html" className="dropdown-item">Land</a>
                                <a href="property-list.html" className="dropdown-item">Villa</a>
                                <a href="property-list.html" className="dropdown-item">Apartment</a>
                                <a href="property-list.html" className="dropdown-item">Penthouse</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sell Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="property-list.html" className="dropdown-item">Land</a>
                                <a href="property-list.html" className="dropdown-item">Villa</a>
                                <a href="property-list.html" className="dropdown-item">Apartment</a>
                                <a href="property-list.html" className="dropdown-item">Penthouse</a>
                            </div>
                        </div>

                        <a href="agents.html" className="nav-item nav-link">Agents</a>
                        <a href="testimonial.html" className="nav-item nav-link">Clients</a>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>

                    </div>
                    
                    <a href="add-property.html" className="btn btn-outline-primary px-3 py-2 d-none d-lg-flex"><b>Add Property</b> <i className="px-1 bi bi-folder-plus"></i></a>

                    <a href="login.html" className="btn btn-primary px-3 py-2  mx-3 d-none d-lg-flex"><b>Account</b> <i className="px-1 bi bi-person"></i></a>
                </div>
            </nav>
        </div>
      </>
    );
  }
  
  export default Navbar;
