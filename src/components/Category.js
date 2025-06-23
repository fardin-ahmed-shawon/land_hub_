import { motion } from 'framer-motion';
import IMG1 from '../img/icon-apartment.png';
import IMG2 from '../img/icon-villa.png';
import IMG3 from '../img/icon-housing.png';
import IMG4 from '../img/icon-building.png';

function Category() {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
      <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <motion.div 
                        className="col-lg-3 col-sm-6 wow fadeInUp" 
                        data-wow-delay="0.1s"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <a style={{textDecoration: 'none'}} className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={IMG1} alt="Icon" />
                                </div>
                                <h6 style={{color: '#000'}}>Apartment</h6>
                                <span style={{color: '#52AA5E'}}>123 Properties</span>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="col-lg-3 col-sm-6 wow fadeInUp" 
                        data-wow-delay="0.3s"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <a style={{textDecoration: 'none'}} className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={IMG2} alt="Icon" />
                                </div>
                                <h6 style={{color: '#000'}}>Villa</h6>
                                <span style={{color: '#52AA5E'}}>123 Properties</span>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="col-lg-3 col-sm-6 wow fadeInUp" 
                        data-wow-delay="0.7s"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <a style={{textDecoration: 'none'}} className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={IMG3} alt="Icon" />
                                </div>
                                <h6 style={{color: '#000'}}>Land</h6>
                                <span style={{color: '#52AA5E'}}>123 Properties</span>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="col-lg-3 col-sm-6 wow fadeInUp" 
                        data-wow-delay="0.1s"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <a style={{textDecoration: 'none'}} className="cat-item d-block bg-light text-center rounded p-3" href="">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={IMG4} alt="Icon" />
                                </div>
                                <h6 style={{color: '#000'}}>Penthouse</h6>
                                <span style={{color: '#52AA5E'}}>123 Properties</span>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Category;