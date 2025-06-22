function PropertyCard(props) {
    const { index, title, detailsLink, thumbnailImage, status, type, currency, price, location, size, bedrooms, bathrooms } = props;
    return (
      <>
          <div className="col-sm-6 col-lg-3 col-md-4" key={index}>
              <div className="property-item rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                      <a href={detailsLink}><img className="img-fluid" src={thumbnailImage} alt="" /></a>
                      <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{status}</div>
                      <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{type}</div>
                  </div>
                  <div className="p-4 pb-0">
                      <h5 className="text-primary mb-3">{currency} {price}</h5>
                      <a className="d-block h5 mb-2" href={detailsLink}>{title}</a>
                      <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{location}</p>
                  </div>
                  <div className="d-flex border-top">
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2"></i>{size}</small>
                      <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2"></i>{bedrooms} Bed</small>
                      <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2"></i>{bathrooms} Bath</small>
                  </div>
              </div>
          </div>
      </>
    );
}

export default PropertyCard;