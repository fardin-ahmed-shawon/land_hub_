import IMG1 from '../img/team-1.jpg';
import IMG2 from '../img/team-2.jpg';
import IMG3 from '../img/team-3.jpg';
import IMG4 from '../img/team-4.jpg';


function Team() {
    return (
      <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Property Agents</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={IMG1} alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Tanvin Hossain</h5>
                                <small>Sales Manager</small>
                                <p>
                                    Tanvin Hossain is a seasoned sales manager with over 6 years of experience in the real estate industry. He has a strong background in property management and client relations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={IMG2} alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Farhana Akter</h5>
                                <small>Selling Agent</small>
                                <p>
                                    Farhana Akter is a selling agent with over 4 years of experience in the real estate market. She has a proven track record of successfully closing deals and ensuring client satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={IMG3} alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Smita Chowdhury</h5>
                                <small>Sales Executive</small>
                                <p>
                                    Smita Chowdhury is a sales executive with over 3 years of experience in the real estate sector. She is known for her exceptional customer service and dedication to helping clients find the perfect property.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={IMG4} alt="" />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Fardin Ahmed</h5>
                                <small>Buying Agent</small>
                                <p>
                                    Fardin Ahmed Shawon is a buying agent with over 5 years of experience in the real estate industry. He specializes in helping clients find their dream homes and investment properties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Team;