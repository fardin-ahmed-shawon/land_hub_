import Slider1 from '../img/carousel-1.jpg';
import Slider2 from '../img/carousel-2.jpg';

function Header() {


    return (
        <>
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">
                            Find A <span className="text-primary">Perfect Property</span> To Live peacefully
                        </h1>
                        <p className="animated fadeIn mb-4 pb-2">
                            Choose your favorite & desiered living space in your favorite city. Just Select and search to find your perfect Property.
                        </p>
                        <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <div className="owl-carousel header-carousel">
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src={Slider1} alt="" />
                            </div>
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src={Slider2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;