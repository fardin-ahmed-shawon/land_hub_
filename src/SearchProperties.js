import Navbar from './components/Navbar';
import HeaderTwo from './components/HeaderTwo';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';

function SearchProperties() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <HeaderTwo pageTitle="Search Properties" />
      <SearchBar />
      <PropertyList />
      <Footer />
    </div>
  );
}

export default SearchProperties;