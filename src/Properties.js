import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import CallAction from './components/CallAction';
import Footer from './components/Footer';

function Properties() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Header />
      <SearchBar />
      <PropertyList />
      <CallAction />
      <Footer />
    </div>
  );
}

export default Properties;