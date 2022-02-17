import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Exchange from './pages/Exchange';
import Liquidity from './pages/Liquidity';
import Farm from './pages/Farm';
import Pool from './pages/Pool';

function App() {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/liquidity" element={<Liquidity />} />
      <Route path="/farm" element={<Farm />} />
      <Route path="/pool" element={<Pool />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;