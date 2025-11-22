import React, { useState } from 'react';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MostPopular from './MostPopular.jsx';
import HeroSection from './HeroSection';
import NewProducts from './NewProducts';
import Categories from './Categories';
import Woman from './Woman.jsx';
import Man from './Man.jsx';
import NewCollections from './NewCollections.jsx';
import Sales from './Sales.jsx';
import Footer from './Footer.jsx';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DrawerComponent from './drawerComponent.jsx';
import Dress from './Dress.jsx';
import Skirt from "./Skirt.jsx";
import WomanShoes from './WomanShoes.jsx';


function AppContent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setIsDrawerOpen(open);

  const location = useLocation();

  const pageTitles = {
    "/NewCollections": "New Collections",
    "/woman": "Woman",
    "/man": "Man",
    "/sales": "On Sale",
    "/category/dress": "Dresses",
    "/category/woman-shoes": "Women’s Shoes",
    "/category/skirt": "Skirts",
  };

  const currentTitle = pageTitles[location.pathname] || "";

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#E6CCB2',
          color: (theme) => theme.palette.text.primary,
          boxShadow: 'none',
          height: { xs: 56, md: 64 },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon sx={{ color: '#452815', width: 50, height: 50 }} />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "left",        // SAĞA YASLAMA
              paddingRight: "16px",      // ÇANTA YANINA YAPIŞMASIN
              fontFamily: "Inter, serif", // MODERN & ZARİF FONT
              fontWeight: 900,
              letterSpacing: "4px",
              fontSize: "2.05rem",
              color: "#3C1904FF",
              marginLeft: 2,
            }}
          >
            {currentTitle}
          </Typography>


          <ShoppingBagOutlinedIcon sx={{ color: '#73411F', width: 33, height: 33 }} />
          <PersonIcon sx={{ color: '#73411F', width: 35, height: 35, marginLeft: 3 }} />
        </Toolbar>
      </AppBar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MostPopular />
              <Categories />
              <NewProducts />
              <Footer />
            </>
          }
        />
        <Route path="/woman" element={<Woman />} />
        <Route path="/man" element={<Man />} />
        <Route path="/NewCollections" element={<NewCollections />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/category/dress" element={<Dress />} />
        <Route path="/category/woman-shoes" element={<WomanShoes />} />
        <Route path="/category/skirt" element={<Skirt />} />

      </Routes>

      <DrawerComponent isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
