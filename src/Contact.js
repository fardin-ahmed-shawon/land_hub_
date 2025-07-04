import Navbar from './components/Navbar';
import HeaderTwo from './components/HeaderTwo';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function Contact() {
    return (
      <div className="container-xxl p-0">
        <Navbar />
        <HeaderTwo pageTitle="Contact"/>
        <SearchBar />


        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Contact Us</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-dark rounded p-3">
                                    <div className="bg-dark d-flex align-items-center bg-dark  rounded p-3" style={{border: '1px dashed #52AA5E'}}>
                                        <div className="bg-dark icon me-3" style={{width: '45px', height: '45px'}}>
                                            <i style={{color: '#52AA5E'}} className="fa fa-map-marker-alt"></i>
                                        </div>
                                        <span className='bg-dark '>Dhanmondi 26/A, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-dark  rounded p-3">
                                    <div className="d-flex align-items-center bg-dark  rounded p-3" style={{border: '1px dashed #52AA5E'}}>
                                        <div className="bg-dark icon me-3" style={{width: '45px', height: '45px'}}>
                                            <i style={{color: '#52AA5E'}} className="fa fa-envelope-open"></i>
                                        </div>
                                        <span className='bg-dark '>easystay@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-dark rounded p-3">
                                    <div className="bg-dark d-flex align-items-center bg-dark  rounded p-3" style={{border: '1px dashed #52AA5E'}}>
                                        <div className="bg-dark icon me-3" style={{width: '45px', height: '45px'}}>
                                            <i style={{color: '#52AA5E'}} className="fa fa-phone-alt"></i>
                                        </div>
                                        <span className='bg-dark '>+88019XXXXXXXX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameborder="0" style={{minHeight: '400px', border: '0'}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a style={{color: '#52AA5E', textDecoration: 'none'}} href="">Download Now</a>.</p>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button style={{background: '#52AA5E', color: '#fff', border: 'none'}} className="bt w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
      </div>
    );
  }
  
  export default Contact;