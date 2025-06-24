import Navbar from './components/Navbar';
import HeaderTwo from './components/HeaderTwo';
import SearchBar from './components/SearchBar';
import Category from './components/Category'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function PropertyType() {
    return (
      <div className="container-xxl p-0">
        <Navbar />
        <HeaderTwo pageTitle="Property Types" />
        <SearchBar />
        <Category />
        <Testimonial />
        <Footer />
      </div>
    );
  }
  
  export default PropertyType;