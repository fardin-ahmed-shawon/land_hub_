function SearchBar() {
    return (
      <>
        <div className="container-fluid mb-5 wow fadeIn" data-wow-delay="0.1s" style={{background: '#52aa5e2d', padding: '35px'}}>
            <div className="container">
                <form action="/search-properties">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Price Range</option>
                                        <option value="1">$20000 - $50000</option>
                                        <option value="2">$60000- $150000</option>
                                        <option value="3">$200000- $800000</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Choose Property Type</option>
                                        <option value="1">Land</option>
                                        <option value="2">Vila</option>
                                        <option value="3">Penthouse</option>
                                        <option value="4">Apartment</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected>Select Your City</option>
                                        <option value="1">San Fransico</option>
                                        <option value="2">Stockholm</option>
                                        <option value="3">Venis</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button style={{color: '#fff', background: '#000'}} className="btn border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </>
    );
  }
  
  export default SearchBar;