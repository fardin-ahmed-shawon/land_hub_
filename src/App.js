import './css/style.css';
import './css/bootstrap.min.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Home from './home';
import PropertyDetails from './PropertyDetails';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      {/* <Home /> */}
      {/* <PropertyDetails /> */}
      <AddProperty />
    </div>
  );
}

export default App;