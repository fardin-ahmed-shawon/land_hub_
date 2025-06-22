import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function AddProperty() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Header />
      <SearchBar />
      
      <div className="container-xxl py-5">
            <div className="card m-auto" style={{maxWidth: '1700px'}}>
                <div className="card-body p-2">
                    <h2 style={{padding: '30px', paddingBottom: '0'}}>Property Details</h2>
                </div>
                <hr style={{border: '5px solid #52AA5E'}} />
                <div style={{padding: '30px'}} className="card-body">
                    <form action="" method="POST">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row g-4">
                                    {/*<!-- Property Title --> */}
                                    <div className="col-md-12">
                                        <label for="propertyTitle" className="form-label">Property Title</label>
                                        <input type="text" className="form-control py-3" id="propertyTitle" name="propertyTitle" placeholder="Enter property title" required />
                                    </div>
                                    {/*<!-- Price --> */}
                                    <div className="col-md-6">
                                        <label for="price" className="form-label">Price (€)</label>
                                        <input type="number" className="form-control py-3" id="price" name="price" placeholder="Enter price" required />
                                    </div>
                                    {/*<!-- Property Type --> */}
                                    <div className="col-md-6">
                                        <label for="propertyType" className="form-label">Property Type</label>
                                        <select className="form-select py-3" id="propertyType" name="propertyType" required>
                                            <option value="" selected disabled>Select property type</option>
                                            <option value="Land">Land</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Penthouse">Penthouse</option>
                                        </select>
                                    </div>
                                    {/*<!-- Bedrooms --> */}
                                    <div className="col-md-4">
                                        <label for="bedrooms" className="form-label">Bedrooms</label>
                                        <input type="number" className="form-control py-3" id="bedrooms" name="bedrooms" placeholder="Enter number of bedrooms" required />
                                    </div>
                                    {/*<!-- Bathrooms --> */}
                                    <div className="col-md-4">
                                        <label for="bathrooms" className="form-label">Bathrooms</label>
                                        <input type="number" className="form-control py-3" id="bathrooms" name="bathrooms" placeholder="Enter number of bathrooms" required />
                                    </div>
                                    {/*<!-- Garages --> */}
                                    <div className="col-md-4">
                                        <label for="garages" className="form-label">Garages</label>
                                        <input type="number" className="form-control py-3" id="garages" name="garages" placeholder="Enter number of garages" required />
                                    </div>


                                    {/*<!--############# Property Details #############--> */}
                                    
                                    {/*<!-- Property Size --> */}
                                    <div className="col-md-4">
                                        <label for="propertySize" className="form-label">Property Size (m²)</label>
                                        <input type="number" className="form-control py-3" id="propertySize" name="propertySize" placeholder="Enter property size" required />
                                    </div>
                                    {/*<!-- Property Lot Size --> */}
                                    <div className="col-md-4">
                                        <label for="propertyLotSize" className="form-label">Property Lot Size (m²)</label>
                                        <input type="number" className="form-control py-3" id="propertyLotSize" name="propertyLotSize" placeholder="Enter property lot size" required />
                                    </div>
                                    {/*<!-- Rooms --> */}
                                    <div className="col-md-4">
                                        <label for="rooms" className="form-label">Rooms</label>
                                        <input type="number" className="form-control py-3" id="rooms" name="rooms" placeholder="Enter number of rooms" required />
                                    </div>
                                    
                                    {/*<!-- Year Built --> */}
                                    <div className="col-md-4">
                                        <label for="yearBuilt" className="form-label">Year Built</label>
                                        <input type="number" className="form-control py-3" id="yearBuilt" name="yearBuilt" placeholder="Enter year built" required />
                                    </div>
                                    
                                    {/*<!-- Garage Size --> */}
                                    <div className="col-md-4">
                                        <label for="garageSize" className="form-label">Garage Size</label>
                                        <input type="text" className="form-control py-3" id="garageSize" name="garageSize" placeholder="Enter garage size" required />
                                    </div>
                                    {/*<!-- Available From --> */}
                                    <div className="col-md-4">
                                        <label for="availableFrom" className="form-label">Available From</label>
                                        <input type="date" className="form-control py-3" id="availableFrom" name="availableFrom" required />
                                    </div>
                                    {/*<!-- Basement --> */}
                                    <div className="col-md-4">
                                        <label for="basement" className="form-label">Basement</label>
                                        <input type="text" className="form-control py-3" id="basement" name="basement" placeholder="Enter basement details" required />
                                    </div>
                                    {/*<!-- External Construction --> */}
                                    <div className="col-md-4">
                                        <label for="externalConstruction" className="form-label">External Construction</label>
                                        <input type="text" className="form-control py-3" id="externalConstruction" name="externalConstruction" placeholder="Enter external construction details" required />
                                    </div>
                                    {/*<!-- Roofing --> */}
                                    <div className="col-md-4">
                                        <label for="roofing" className="form-label">Roofing</label>
                                        <input type="text" className="form-control py-3" id="roofing" name="roofing" placeholder="Enter roofing details" required />
                                    </div>
                                    {/*<!--############# Property Details End #############--> */}

                                    {/*<!-- Choose Agent --> */}
                                    <div className="col-md-12">
                                        <label for="agent" className="form-label">Property Agent</label>
                                        <select className="form-select py-3" id="agent" name="agent" required>
                                            <option value="" selected disabled>Select property agent</option>
                                            <option value="">Fardin Ahmed</option>
                                            <option value="">Tanvin Ahmed</option>
                                            <option value="">Alexa</option>
                                            <option value="">Tom Bretain</option>
                                        </select>
                                    </div>

                                    {/*<!-- Features Checklist --> */}
                                    <div className="col-md-12">
                                        <label for="features" className="form-label">Features</label>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5>Interior Details</h5>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="equippedKitchen" name="features[]" value="Equipped Kitchen" />
                                                    <label className="form-check-label" for="equippedKitchen">Equipped Kitchen</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gym" name="features[]" value="Gym" />
                                                    <label className="form-check-label" for="gym">Gym</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="laundry" name="features[]" value="Laundry" />
                                                    <label className="form-check-label" for="laundry">Laundry</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="mediaRoom" name="features[]" value="Media Room" />
                                                    <label className="form-check-label" for="mediaRoom">Media Room</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>Outdoor Details</h5>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="backYard" name="features[]" value="Back yard" />
                                                    <label className="form-check-label" for="backYard">Back yard</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="basketballCourt" name="features[]" value="Basketball court" />
                                                    <label className="form-check-label" for="basketballCourt">Basketball court</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="garageAttached" name="features[]" value="Garage Attached" />
                                                    <label className="form-check-label" for="garageAttached">Garage Attached</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="hotBath" name="features[]" value="Hot Bath" />
                                                    <label className="form-check-label" for="hotBath">Hot Bath</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="pool" name="features[]" value="Pool" />
                                                    <label className="form-check-label" for="pool">Pool</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>Utilities</h5>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="centralAir" name="features[]" value="Central Air" />
                                                    <label className="form-check-label" for="centralAir">Central Air</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="electricity" name="features[]" value="Electricity" />
                                                    <label className="form-check-label" for="electricity">Electricity</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="heating" name="features[]" value="Heating" />
                                                    <label className="form-check-label" for="heating">Heating</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="naturalGas" name="features[]" value="Natural Gas" />
                                                    <label className="form-check-label" for="naturalGas">Natural Gas</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="ventilation" name="features[]" value="Ventilation" />
                                                    <label className="form-check-label" for="ventilation">Ventilation</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="water" name="features[]" value="Water" />
                                                    <label className="form-check-label" for="water">Water</label>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <h5>Other Features</h5>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="chairAccessible" name="features[]" value="Chair Accessible" />
                                                    <label className="form-check-label" for="chairAccessible">Chair Accessible</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="elevator" name="features[]" value="Elevator" />
                                                    <label className="form-check-label" for="elevator">Elevator</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="smokeDetectors" name="features[]" value="Smoke detectors" />
                                                    <label className="form-check-label" for="smokeDetectors">Smoke detectors</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="washerDryer" name="features[]" value="Washer and dryer" />
                                                    <label className="form-check-label" for="washerDryer">Washer and dryer</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="wifi" name="features[]" value="WiFi" />
                                                    <label className="form-check-label" for="wifi">WiFi</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<!-- Location --> */}
                                    <div className="col-md-12">
                                        <label for="location" className="form-label">Location</label>
                                        <input type="text" className="form-control py-3" id="location" name="location" placeholder="Enter location" required />
                                    </div>
                                    {/*<!-- Description --> */}
                                    <div className="col-md-12">
                                        <label for="description" className="form-label">Description</label>
                                        <textarea className="form-control py-3" id="description" name="description" rows="5" placeholder="Enter property description" required></textarea>
                                    </div>
                                    {/*<!-- Address --> */}
                                    <div className="col-md-12">
                                        <label for="address" className="form-label">Address</label>
                                        <textarea className="form-control py-3" id="address" name="address" rows="3" placeholder="Enter property address" required></textarea>
                                    </div>

                                    {/*<!-- Utilities --> */}
                                    <div className="col-md-12">
                                        <label for="utilities" className="form-label">Utilities</label>
                                        <textarea className="form-control py-3" id="utilities" name="utilities" rows="3" placeholder="Enter utilities (e.g., Electricity, Water, Heating)" required></textarea>
                                    </div>
                                    {/*<!-- Floor Plans --> */}
                                    <div className="col-md-12">
                                        <label for="floorPlans" className="form-label">Floor Plans</label>
                                        <textarea className="form-control py-3" id="floorPlans" name="floorPlans" rows="3" placeholder="Enter floor plan details" required></textarea>
                                    </div>
                                    {/*<!-- Submit Button --> */}
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary py-3 px-5"><b>Submit Property</b></button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 pt-4 pt-md-0">
                                <div className="row g-4">
                                    {/*<!-- Property Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Property Thumbnail Images</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                    {/*<!-- Property Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Property Image 1</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                    {/*<!-- Property Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Property Image 2</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                    {/*<!-- Property Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Property Image 3</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                    {/*<!-- Property Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Property Image 4</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                    {/*<!-- Property Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Property Image 5</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                    {/*<!-- Floor Images --> */}
                                    <div className="col-md-12">
                                        <label for="images" className="form-label">Floor Plan Image</label>
                                        <input type="file" className="form-control py-3" id="images" name="images[]" multiple required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      <Footer />
    </div>
  );
}

export default AddProperty;