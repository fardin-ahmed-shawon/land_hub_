import { motion } from 'framer-motion';
import Slider from '../img/header.jpg';

function HeaderTwo(props) {
  return (
    <>
      <div className="container-fluid header p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                        <motion.h1
                            className="display-5 animated fadeIn mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                        <span style={{ color: '#52AA5E' }}>{props.pageTitle}</span>
                        </motion.h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item text-light active" aria-current="page">{props.pageTitle}</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src={Slider} alt="" />
                </div>
            </div>
        </div>
    </>
  );
}

export default HeaderTwo;