import React, { useState } from 'react';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Toolbar, Typography, IconButton, Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setIsDrawerOpen(open);

  return (
    <Router>
      {/* AppBar */}
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
          {/* Menü ikonu */}
          <IconButton
            color="inherit"
            aria-label="menüyü aç"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: 'flex', md: 'flex' },
              marginRight: 2,
            }}
          >
            <MenuIcon sx={{ color: '#452815', width: 50, height: 50 }} />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {/* Başlık boş bırakılmış */}
          </Typography>

          {/* Kullanıcı ikonu */}
          <ShoppingBagOutlinedIcon
            sx={{
              color: '#73411F',
              width: 30,
              height: 30,
              borderRadius: '50%',
              padding: 0.2,
            }}
          />
          <PersonIcon
            sx={{
              color: '#73411F',
              width: 30,
              height: 30,
              borderRadius: '50%',
              padding: 0.2,
              marginLeft: 1,
            }}
          />
        </Toolbar>
      </AppBar>

      {/* Routes */}
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
        <Route path="/new-collections" element={<NewCollections />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>

      {/* Sidebar / Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ marginTop: 10, width: 250, backgroundColor: '#f2dddc' }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {[
              { text: 'Anasayfa', path: '/' },
              { text: 'Kadın', path: '/woman' },
              { text: 'Erkek', path: '/man' },
              { text: 'Yeni', path: '/new-collections' },
              { text: 'İndirim', path: '/sales' },
            ].map(({ text, path }) => (
              <DrawerLink key={text} text={text} path={path} />
            ))}
          </List>
        </Box>
      </Drawer>
    </Router>
  );
}

// Drawer item tıklayınca yönlendirme
function DrawerLink({ text, path }) {
  const navigate = useNavigate();
  return (
    <ListItem button onClick={() => navigate(path)}>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default App;
