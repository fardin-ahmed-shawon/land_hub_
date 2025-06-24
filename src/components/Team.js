import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import IMG1 from '../img/team-1.jpg';
import IMG2 from '../img/team-2.jpg';
import IMG3 from '../img/team-3.jpg';
import IMG4 from '../img/team-4.jpg';

function Team() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        },
    };

    const agents = [
        {
            img: IMG1,
            name: "Tanvin Hossain",
            role: "Sales Manager",
            description: "Tanvin Hossain is a seasoned sales manager with over 6 years of experience in the real estate industry. He has a strong background in property management and client relations."
        },
        {
            img: IMG2,
            name: "Farhana Akter",
            role: "Selling Agent",
            description: "Farhana Akter is a selling agent with over 4 years of experience in the real estate market. She has a proven track record of successfully closing deals and ensuring client satisfaction."
        },
        {
            img: IMG3,
            name: "Smita Chowdhury",
            role: "Sales Executive",
            description: "Smita Chowdhury is a sales executive with over 3 years of experience in the real estate sector. She is known for her exceptional customer service and dedication to helping clients find property."
        },
        {
            img: IMG4,
            name: "Fardin Ahmed",
            role: "Buying Agent",
            description: "Fardin Ahmed Shawon is a buying agent with over 5 years of experience in the real estate industry. He specializes in helping clients find their dream homes and investment properties."
        }
    ];

    return (
        <motion.div
            ref={containerRef}
            className="container-xxl py-5"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="container">
                <motion.div
                    className="text-center mx-auto mb-5"
                    style={{ maxWidth: '600px' }}
                    variants={itemVariants}
                >
                    <h1 className="mb-3">Property Agents</h1>
                    <p>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
                    </p>
                </motion.div>
                <motion.div className="row g-4" variants={containerVariants}>
                    {agents.map((agent, index) => (
                        <motion.div
                            className="col-lg-3 col-md-6"
                            key={index}
                            variants={itemVariants}
                        >
                            <div className="bg-dark team-item rounded overflow-hidden">
                                <div className="bg-dark position-relative">
                                    <img className="img-fluid" src={agent.img} alt={agent.name} />
                                    <div className="bg-dark position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                        <a className="bg-dark btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="bg-dark btn btn-square mx-1" href="#"><i className="bg-dark fab fa-twitter"></i></a>
                                        <a className="bg-dark btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-dark text-center p-4 mt-3">
                                    <h5 className="bg-dark fw-bold mb-0">{agent.name}</h5>
                                    <small className='bg-dark '>{agent.role}</small>
                                    <p className='bg-dark '>{agent.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Team;
