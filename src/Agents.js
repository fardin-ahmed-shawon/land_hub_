import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Team from './components/Team';
import Footer from './components/Footer';

function Agents() {
    return (
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <Header />
        <SearchBar />
        <Team />
        <Footer />
      </div>
    );
  }
  
  export default Agents;