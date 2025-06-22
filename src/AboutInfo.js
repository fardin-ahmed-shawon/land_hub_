import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import About from './components/About';
import CallAction from './components/CallAction';
import Team from './components/Team';
import Footer from './components/Footer';

function AboutInfo() {
    return (
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <Header />
        <SearchBar />
        <About />
        <CallAction />
        <Team />
        <Footer />
      </div>
    );
  }
  
  export default AboutInfo;