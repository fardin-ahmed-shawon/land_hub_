import Navbar from './components/Navbar';
import HeaderTwo from './components/HeaderTwo';
import SearchBar from './components/SearchBar';
import About from './components/About';
import CallAction from './components/CallAction';
import Team from './components/Team';
import Footer from './components/Footer';

function AboutInfo() {
    return (
      <div className="container-xxl bg-white p-0">
        <Navbar />
        <HeaderTwo pageTitle="About" />
        <SearchBar />
        <About />
        <CallAction />
        <Team />
        <Footer />
      </div>
    );
  }
  
  export default AboutInfo;