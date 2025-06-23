import { motion } from 'framer-motion';
import IMG from '../img/call-to-action.jpg';

function CallAction() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 } },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className="container-xxl py-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.div className="container" variants={childVariants}>
                <motion.div className="bg-light rounded p-3" variants={childVariants}>
                    <motion.div
                        className="bg-white rounded p-4"
                        style={{ border: '1px dashed #52AA5E' }}
                        variants={childVariants}
                    >
                        <motion.div className="row g-5 align-items-center" variants={containerVariants}>
                            <motion.div
                                className="col-lg-6 wow fadeIn"
                                data-wow-delay="0.1s"
                                variants={childVariants}
                            >
                                <motion.img
                                    className="img-fluid rounded w-100"
                                    src={IMG}
                                    alt=""
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            <motion.div
                                className="col-lg-6 wow fadeIn"
                                data-wow-delay="0.5s"
                                variants={childVariants}
                            >
                                <motion.div className="mb-4" variants={childVariants}>
                                    <motion.h1 className="mb-3" variants={childVariants}>
                                        Contact With Our Certified Agent
                                    </motion.h1>
                                    <motion.p variants={childVariants}>
                                        Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.
                                    </motion.p>
                                </motion.div>
                                <motion.a
                                    style={{ background: '#52AA5E', color: '#fff' }}
                                    href=""
                                    className="btn py-3 px-4 me-2"
                                    whileHover={{ scale: 1.1, backgroundColor: '#3E8E4A' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-phone-alt me-2"></i>Make A Call
                                </motion.a>
                                <motion.a
                                    href=""
                                    className="btn btn-dark py-3 px-4"
                                    whileHover={{ scale: 1.1, backgroundColor: '#333' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <i className="fa fa-calendar-alt me-2"></i>Get Appoinment
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default CallAction;