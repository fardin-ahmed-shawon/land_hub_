import { motion } from 'framer-motion';
import Slider1 from '../img/carousel-1.jpg';
import Slider2 from '../img/carousel-2.jpg';

function Header() {


    return (
        <>
            <div className="container-fluid header p-0">
                <div className="bg-transparent row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <motion.h1
                            className="bg-transparent display-5 mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Find A <span className='bg-transparent' style={{ color: '#52AA5E' }}>Perfect Property</span> To Live peacefully
                        </motion.h1>
                        <p className="bg-transparent animated fadeIn mb-4 pb-2">
                            Choose your favorite & desiered living space in your favorite city. Just Select and search to find your perfect Property.
                        </p>
                        <a href="" style={{background: '#52AA5E', color: '#fff'}} className="btn py-3 px-5 me-3 animated fadeIn">Get Started</a>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                    <div id="headerCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Slider1} className="d-block w-100 img-fluid" alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Slider2} className="d-block w-100 img-fluid" alt="Slide 2" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#headerCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#headerCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;