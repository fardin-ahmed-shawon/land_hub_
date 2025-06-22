import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function PropertyType() {
    return (
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <Header />
        <SearchBar />
        <Category />
        <Testimonial />
        <Footer />
      </div>
    );
  }
  
  export default PropertyType;