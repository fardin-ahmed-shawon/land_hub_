import Navbar from './components/Navbar';
import HeaderTwo from './components/HeaderTwo';
import SearchBar from './components/SearchBar';
import Team from './components/Team';
import Footer from './components/Footer';

function Agents() {
    return (
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <HeaderTwo pageTitle="Agents" />
        <SearchBar />
        <Team />
        <Footer />
      </div>
    );
  }
  
  export default Agents;