import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.jsx';
import Hotel from './pages/HotelSector.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ItSector from './pages/ItSector.jsx';
import FoodSector from './pages/FoodSector.jsx';
import AirlineSector from './pages/AirlineSector.jsx';
import CementSector from './pages/CementSector.jsx';
import PharmaSector from './pages/PharmaSector.jsx';

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/it" element={<ItSector />} />
          <Route path="/food" element={<FoodSector />} />
          <Route path="/airlines" element={<AirlineSector/>} />
          <Route path="/cement" element={<CementSector/>} />
          <Route path="/pharma" element={<PharmaSector/>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;