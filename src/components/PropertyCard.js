import { Link } from 'react-router-dom';

function PropertyCard(props) {
    const { index, title, detailsLink, thumbnailImage, status, type, currency, price, location, size, bedrooms, bathrooms } = props;
    return (
      <>
          <div className="col-sm-6 col-lg-3 col-md-4" key={index}>
              <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                      <Link to='/property-details'>
                       <a href=""><img className="img-fluid" src={thumbnailImage} alt="" /></a>
                      </Link>
                      <div style={{background: '#52AA5E', color: '#fff'}} className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{status}</div>
                      <div style={{color: '#52AA5E'}} className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{type}</div>
                  </div>
                  <div className="p-4 pb-0">
                      <h5 style={{color: '#52AA5E', fontWeight: '700'}} className="mb-3">{currency} {price}</h5>
                      <Link style={{ textDecoration: 'none' }} to='/property-details'>
                        <a style={{color: '#000', textDecoration: 'none'}} className="d-block h5 mb-2" href="">{title}</a>
                      </Link>
                      <p><i style={{color: '#52AA5E'}}  className="fa fa-map-marker-alt me-2"></i>{location}</p>
                  </div>
                  <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2"><i style={{color: '#52AA5E'}}  className="fa fa-ruler-combined me-2"></i>{size}</small>
                      <small className="flex-fill text-center border-end py-2"><i style={{color: '#52AA5E'}}  className="fa fa-bed me-2"></i>{bedrooms} Bed</small>
                      <small className="flex-fill text-center py-2"><i style={{color: '#52AA5E'}}  className="fa fa-bath me-2"></i>{bathrooms} Bath</small>
                  </div>
              </div>
          </div>
      </>
    );
}

export default PropertyCard;