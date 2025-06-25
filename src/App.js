import React, { useEffect, useState } from 'react'; // Import React and useEffect
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './css/bootstrap.min.css';
import './css/style.css';

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
  // Initialize light from localStorage or default to 1
  const [light, setLight] = useState(() => {
    const storedLight = localStorage.getItem('light');
    return storedLight ? parseInt(storedLight, 10) : 1;
  });

  const DynamicStyles = () => {
    const location = useLocation(); // Detect route changes

    useEffect(() => {
      if (light === 1) {
        // Remove classes
        const elements = document.querySelectorAll('.bg-dark');
        elements.forEach(element => {
          element.classList.remove('bg-dark');
        });

        const elements2 = document.querySelectorAll('.bg-transparent');
        elements2.forEach(element => {
          element.classList.remove('bg-transparent');
        });

        const btn = document.querySelectorAll('.btn-dark');
        btn.forEach(element => {
          element.classList.remove('btn-dark');
        });

        const text = document.querySelectorAll('.text-white');
        text.forEach(element => {
          element.classList.remove('text-white');
        });

        const text5 = document.querySelectorAll('.text-white-50');
        text5.forEach(element => {
          element.classList.remove('text-white-50');
        });

        const text2 = document.querySelectorAll('.text-light');
        text2.forEach(element => {
          element.classList.remove('text-light');
        });

        // Apply styles dynamically
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
          #root, html, * {
            color: var(--dark);
            background: #fff;
          }
          .navbar-light .navbar-nav .nav-link {
            color: var(--dark);
            font-weight: 500;
          }

          .form {
            background: #fff;
          }
          .form-link span, .form-link a {
            color: #000;
          }
          .form a {
            color: #52AA5E;
          }
          
          .footer {
            border-top: 5px solid #52AA5E;
          }
          .footer .copyright a {
            color: #52AA5E;
          }
          .footer .btn.btn-link {
            color: #000;
          }
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
              background: #000;
          }

          .acc-title, .bi-person {
            color: #fff;
          }
        `;
        document.head.appendChild(styleElement);
      }
    }, [light, location]); // Trigger useEffect on route changes
    return null;
  };

  // Function to toggle light mode and save to localStorage
  const toggleLightMode = () => {
    const newLight = light === 1 ? 0 : 1;
    setLight(newLight);
    localStorage.setItem('light', newLight);
  };

  return (
    <>
      <i 
      style={{
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000
      }} 
      className={`d-none px-3 bi ${light === 1 ? 'bi-moon' : 'bi-brightness-high'}`} 
      onClick={toggleLightMode}
    ></i>
      <Router>
        <DynamicStyles /> {/* Add the dynamic styles component */}
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