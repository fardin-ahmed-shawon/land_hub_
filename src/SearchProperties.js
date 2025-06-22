import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';

function SearchProperties() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Header />
      <SearchBar />
      <PropertyList />
      <Footer />
    </div>
  );
}

export default SearchProperties;