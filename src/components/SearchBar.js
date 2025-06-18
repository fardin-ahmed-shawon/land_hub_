function SearchBar() {
    return (
      <>
        <div
        className="container-fluid mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ background: "#52aa5e2d", padding: "35px" }}>
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <select className="form-select border-0 py-3">
                    <option selected>Price Range</option>
                    <option value="1">Property Type 1</option>
                    <option value="2">Property Type 2</option>
                    <option value="3">Property Type 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3">
                    <option selected>Choose Property Type</option>
                    <option value="1">Property Type 1</option>
                    <option value="2">Property Type 2</option>
                    <option value="3">Property Type 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3">
                    <option selected>Select Your City</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button
                style={{ color: "#fff", background: "#000" }}
                className="btn border-0 w-100 py-3"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default SearchBar;