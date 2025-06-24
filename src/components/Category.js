import { motion } from 'framer-motion';
import IMG1 from '../img/icon-apartment.png';
import IMG2 from '../img/icon-villa.png';
import IMG3 from '../img/icon-housing.png';
import IMG4 from '../img/icon-building.png';

function Category() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
      <>
        <motion.div
          className="container-xxl py-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
            <div className="container">
                <motion.div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: '600px' }}
                    variants={itemVariants}
                >
                    <h1 className="mb-3">Property Types</h1>
                    <p>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                    </p>
                </motion.div>
                <motion.div className="row g-4" variants={containerVariants}>
                    {[{
                        img: IMG1,
                        title: "Apartment",
                        properties: "123 Properties",
                    }, {
                        img: IMG2,
                        title: "Villa",
                        properties: "123 Properties",
                    }, {
                        img: IMG3,
                        title: "Land",
                        properties: "123 Properties",
                    }, {
                        img: IMG4,
                        title: "Penthouse",
                        properties: "123 Properties",
                    }].map((category, index) => (
                        <motion.div
                            className="col-lg-3 col-sm-6 wow fadeInUp"
                            data-wow-delay={`${0.1 + index * 0.2}s`}
                            key={index}
                            variants={itemVariants}
                        >
                            <a style={{ textDecoration: 'none' }} className="bg-dark cat-item d-block bg-light text-center rounded p-3" href="">
                                <div className="bg-dark rounded p-4">
                                    <div className="icon mb-3">
                                        <img className="img-fluid" src={category.img} alt="Icon" />
                                    </div>
                                    <h6 className='bg-transparent ' style={{ color: '#fff' }}>{category.title}</h6>
                                    <span className='bg-transparent ' style={{ color: '#52AA5E' }}>{category.properties}</span>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
      </>
    );
}

export default Category;