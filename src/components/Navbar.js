import LOGO from '../img/logo.png';

function Navbar() {
    return (
      <>
        <div className="container-fluid nav-bar bg-transparent">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
          <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
            <img className="img-fluid" src={LOGO} alt="Icon" style={{ width: "180px" }} />
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>

              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Buy Property
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="property-list.html" className="dropdown-item">
                    Property List
                  </a>
                  <a href="property-type.html" className="dropdown-item">
                    Property Type
                  </a>
                  <a href="property-agent.html" className="dropdown-item">
                    Property Agent
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Sell Property
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="property-list.html" className="dropdown-item">
                    Property List
                  </a>
                  <a href="property-type.html" className="dropdown-item">
                    Property Type
                  </a>
                  <a href="property-agent.html" className="dropdown-item">
                    Property Agent
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Rent Property
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="property-list.html" className="dropdown-item">
                    Property List
                  </a>
                  <a href="property-type.html" className="dropdown-item">
                    Property Type
                  </a>
                  <a href="property-agent.html" className="dropdown-item">
                    Property Agent
                  </a>
                </div>
              </div>

              <a href="testimonial.html" className="nav-item nav-link">
                Clients
              </a>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
              <a href="" className="nav-item nav-link">
                News
              </a>
            </div>
            <a href="" className="btn btn-outline-primary px-3 py-2 mx-3 d-none d-lg-flex">
              Login/Register
            </a>
            <a href="" className="btn btn-primary px-3 py-2 d-none d-lg-flex">
              Add Property
            </a>
          </div>
        </nav>
      </div>
      </>
    );
  }
  
  export default Navbar;
