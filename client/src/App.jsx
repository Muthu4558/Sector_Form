import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home.jsx';
import Hotel from './pages/HotelSector.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import FoodSector from './pages/FoodSector.jsx';
import AirlineSector from './pages/AirlineSector.jsx';
import CementSector from './pages/CementSector.jsx';
import PharmaSector from './pages/PharmaSector.jsx';
import MiningSector from './pages/MiningSector.jsx';
import FertilizerSector from './pages/FertilizerSector.jsx';
import SteelSector from './pages/SteelSector.jsx';
import ITESSector from './pages/ITESSector.jsx';
import LeatherSector from './pages/LeatherSector.jsx';
import BankSector from './pages/BankSector.jsx';
import ChemicalSector from './pages/ChemicalSector.jsx';
import TextileSector from './pages/TextileSector.jsx';
import PetroleumSector from './pages/PetroleumSector.jsx';
import HeavySector from './pages/HeavySector.jsx';
import AutomobileSector from './pages/AutomobileSector.jsx';

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          {/* <Route path="/it" element={<ItSector />} /> */}
          <Route path="/food" element={<FoodSector />} />
          <Route path="/airlines" element={<AirlineSector/>} />
          <Route path="/cement" element={<CementSector/>} />
          <Route path="/pharma" element={<PharmaSector/>} />
          <Route path="/mining" element={<MiningSector/>} />
          <Route path="/fertilizer" element={<FertilizerSector/>} />
          <Route path="/steel" element={<SteelSector/>} />
          <Route path="/ites&it" element={<ITESSector/>} />
          <Route path="/leather-industry" element={<LeatherSector/>} />
          <Route path="/banks" element={<BankSector/>} />
          <Route path="/chemical" element={<ChemicalSector/>} />
          <Route path="/textile" element={<TextileSector/>} />
          <Route path="/petroleum" element={<PetroleumSector/>} />
          <Route path="/heavy-industry" element={<HeavySector/>} />
          <Route path="/automobile" element={<AutomobileSector/>} />
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