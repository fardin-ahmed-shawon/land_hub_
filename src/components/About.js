import { motion } from 'framer-motion';
import IMG from '../img/about.jpg';

function About() {
    return (
      <> 
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Image Section */}
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={IMG} />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><i style={{color: '#52AA5E'}} className="fa fa-check me-3"></i>Tempor erat elitr rebum at clita</p>
                        <p><i style={{color: '#52AA5E'}} className="fa fa-check me-3"></i>Aliqu diam amet diam et eos</p>
                        <p><i style={{color: '#52AA5E'}} className="fa fa-check me-3"></i>Clita duo justo magna dolore erat amet</p>
                        <a style={{background: '#52AA5E', color: '#fff'}} className="btn py-3 px-5 mt-3" href="">Read More</a>
                    </motion.div>
                </div>
            </div>
        </div>
      </>
    );
}

export default About;