import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './ui/header';
// import Footer from "./ui/footer";
import Footer from './ui/footer';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { setNavigationColors } from './ui/theme';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import EngineeringPage from '../pages/EngineeringPage';
import CustomSoftwarePage from '../pages/CustomSoftwarePage';
import EnterprisePage from '../pages/EnterprisePage';
import RecoveryPage from '../pages/RecoveryPage';
import HobbiesPage from '../pages/HobbiesPage';
import AWS from '../pages/AWSPage';
import Contact from '../pages/contactme';
import NotFoundPage from '../pages/NotFoundPage';

import P8Rally from '../pages/P8ProjectPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  // If you want to override navigation colors, change the values below.
  // Example: setNavigationColors({ activeText: '#fff', nonActiveText: '#000' })
  setNavigationColors({ activeText: '#ffffff', nonActiveText: '#000000' });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path="/"
            element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route path="/p8RallyProject" element={<P8Rally />} />
          <Route path="/customsoftware" element={<CustomSoftwarePage />} />
          <Route
            path="/engineering"
            element={<EngineeringPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/recovery" element={<RecoveryPage />} />
          <Route path="/hobbies" element={<HobbiesPage />} />
          <Route path="/aws" element={<AWS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/integrations" element={<div>Integrations</div>} />
          <Route path="/cr" element={<div>Celebrate Recovery</div>} />
          <Route path="/woodshop" element={<div>Woodshop</div>} />
          <Route path="/kitchen" element={<div>Kitchen</div>} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
