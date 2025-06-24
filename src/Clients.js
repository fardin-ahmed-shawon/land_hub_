import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function Clients() {
    return (
      <div className="container-xxl p-0">
        <Navbar />
        <Header />
        <SearchBar />
        <Testimonial />
        <Footer />
      </div>
    );
  }
  
  export default Clients;