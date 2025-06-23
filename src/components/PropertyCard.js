import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion

function PropertyCard(props) {
    const { index, title, detailsLink, thumbnailImage, status, type, currency, price, location, size, bedrooms, bathrooms } = props;

    return (
      <>
          <motion.div
              className="col-sm-6 col-lg-3 col-md-4 g-4"
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move up
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position when in view
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is visible
              transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
          >
              <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                      <Link to='/property-details'>
                          <motion.a
                              href=""
                              whileHover={{ scale: 1.1 }} // Scale up the image on hover
                              transition={{ duration: 0.3 }}
                          >
                              <img className="img-fluid" src={thumbnailImage} alt="" />
                          </motion.a>
                      </Link>
                      <motion.div
                          style={{ background: '#52AA5E', color: '#fff' }}
                          className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                      >
                          {status}
                      </motion.div>
                      <motion.div
                          style={{ color: '#52AA5E' }}
                          className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                      >
                          {type}
                      </motion.div>
                  </div>
                  <div className="p-4 pb-0">
                      <h5 style={{ color: '#52AA5E', fontWeight: '700' }} className="mb-3">
                          {currency} {price}
                      </h5>
                      <Link style={{ textDecoration: 'none' }} to='/property-details'>
                          <motion.a
                              style={{ color: '#000', textDecoration: 'none' }}
                              className="d-block h5 mb-2"
                              href=""
                              whileHover={{ color: '#52AA5E' }} // Change text color on hover
                              transition={{ duration: 0.3 }}
                          >
                              {title}
                          </motion.a>
                      </Link>
                      <p>
                          <i style={{ color: '#52AA5E' }} className="fa fa-map-marker-alt me-2"></i>
                          {location}
                      </p>
                  </div>
                  <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2">
                          <i style={{ color: '#52AA5E' }} className="fa fa-ruler-combined me-2"></i>
                          {size}
                      </small>
                      <small className="flex-fill text-center border-end py-2">
                          <i style={{ color: '#52AA5E' }} className="fa fa-bed me-2"></i>
                          {bedrooms} Bed
                      </small>
                      <small className="flex-fill text-center py-2">
                          <i style={{ color: '#52AA5E' }} className="fa fa-bath me-2"></i>
                          {bathrooms} Bath
                      </small>
                  </div>
              </div>
          </motion.div>
      </>
    );
}

export default PropertyCard;