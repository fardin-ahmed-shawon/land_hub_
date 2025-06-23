import Navbar from './components/Navbar';
import HeaderTwo from './components/HeaderTwo';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import CallAction from './components/CallAction';
import Footer from './components/Footer';

function Properties() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <HeaderTwo pageTitle="Properties" />
      <SearchBar />
      <PropertyList />
      <CallAction />
      <Footer />
    </div>
  );
}

export default Properties;