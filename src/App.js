import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css';
import './css/bootstrap.min.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Login from './login';

import Home from './home';
import PropertyDetails from './PropertyDetails';
import AddProperty from './AddProperty';
import AboutInfo from './AboutInfo';
import Contact from './Contact';
import Agents from './Agents';
import Clients from './Clients';
import PropertyType from './PropertyType';
import Properties from './Properties';
import SearchProperties from './SearchProperties';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/add-property" element={<AddProperty />} />
          <Route path="/about-info" element={<AboutInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-type" element={<PropertyType />} />
          <Route path="/search-properties" element={<SearchProperties />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;