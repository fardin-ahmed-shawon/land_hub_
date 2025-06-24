import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import About from './components/About';
import PropertyList from './components/PropertyList';
import CallAction from './components/CallAction';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="container-xxl p-0">
      <Navbar />
      <Header />
      <SearchBar />
      <Category />
      <About />
      <PropertyList />
      <CallAction />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;