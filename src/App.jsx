import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import StationDetails from './pages/StationDetails';
import Booking from './pages/Booking';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/station/:id" element={<StationDetails />} />
            <Route path="/booking/:id" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
