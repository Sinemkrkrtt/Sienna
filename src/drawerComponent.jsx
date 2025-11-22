import { Drawer, Box, List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import { useState } from "react";
import DrawerLink from "./drawerLink";
import SearchBar from "./searchBar";
import { useNavigate } from "react-router-dom";


function DrawerComponent({ isDrawerOpen, toggleDrawer }) {
  const [openWoman, setOpenWoman] = useState(false);
  const [openMan, setOpenMan] = useState(false);

  const handleWomanClick = () => setOpenWoman(!openWoman);
  const handleManClick = () => setOpenMan(!openMan);

  const navigate = useNavigate();

  const allCategories = [
    { name: "Blouse", path: "/category/bluz" },
    { name: "Shirt", path: "/category/gomlek" },
    { name: "Dress", path: "/category/dress" },
    { name: "Pants", path: "/category/pantolon" },
    { name: "Skirt", path: "/category/skirt" },
    { name: "Shorts", path: "/category/sort" },
    { name: "Outerwear", path: "/category/dis-giyim" },
    { name: "Bag", path: "/category/canta" },
    { name: "Shoes", path: "/category/ayakkabi" },
    { name: "Accessories", path: "/category/aksesuar" },
  ];

  const keywordMap = {
    "coat": "/category/dis-giyim",
    "jacket": "/category/dis-giyim",
    "overcoat": "/category/dis-giyim",
    "outerwear": "/category/dis-giyim",
    "blouse": "/category/bluz",
    "shirt": "/category/gomlek",
    "pants": "/category/pantolon",
    "skirt": "/category/skirt",
    "shorts": "/category/sort",
    "bag": "/category/canta",
    "shoes": "/category/shoes",
    "accessories": "/category/aksesuar",
    "dress": "/category/dress"
  };

  const handleSelectCategory = (cat) => {
    toggleDrawer(false)();
    navigate(cat.path);
  };

  const womanCategories = [
    { name: "Blouse", path: "/category/bluz" },
    { name: "Shirt", path: "/category/gomlek" },
    { name: "Dress", path: "/category/dress" },
    { name: "Pants", path: "/category/pantolon" },
    { name: "Skirt", path: "/category/skirt" },
    { name: "Shorts", path: "/category/sort" },
    { name: "Outerwear", path: "/category/dis-giyim" },
    { name: "Bag", path: "/category/canta" },
    { name: " Shoes", path: "/category/woman-shoes" },
    { name: "Accessories", path: "/category/aksesuar" },
  ];

  const manCategories = ["Shirt", "T-shirt", "Pants", "Outerwear", "Shoes", "Accessories"];

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 350, backgroundColor: "#fff", paddingTop: 2 }} role="presentation">
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <SearchBar categories={allCategories} onSelect={handleSelectCategory} />
        </Box>

        <List>
          <DrawerLink
            text="Home"
            path="/"
            startIcon={<HomeFilledIcon sx={{ fontSize: 18, color: "#CA7403FF", mr: 1 }} />}
            sx={{ fontSize: 18, fontWeight: 500, color: "#3A3A3A", paddingY: "6px", fontFamily: "'Montserrat', sans-serif" }}
          />

          <ListItemButton onClick={handleWomanClick} sx={{ paddingY: "6px", paddingX: "16px" }}>
            <FemaleIcon sx={{ fontSize: 22, color: "#CA7403FF", mr: 1 }} />
            <ListItemText primary="Woman" primaryTypographyProps={{ fontSize: 18, fontWeight: 500, color: "#3A3A3A" }} />
            {openWoman ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openWoman} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {womanCategories.map(item => (
                <DrawerLink key={item.name} text={item.name} path={item.path} />
              ))}

            </List>
          </Collapse>

          <ListItemButton onClick={handleManClick} sx={{ paddingY: "6px", paddingX: "16px" }}>
            <MaleIcon sx={{ fontSize: 22, color: "#CA7403FF", mr: 1 }} />
            <ListItemText primary="Man" primaryTypographyProps={{ fontSize: 18, fontWeight: 500, color: "#3A3A3A" }} />
            {openMan ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMan} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              {manCategories.map(item => (
                <DrawerLink key={item} text={item} path={`/category/${item.toLowerCase()}`} />
              ))}
            </List>
          </Collapse>

          <DrawerLink text="New" path="/NewCollections" startIcon={<AutoAwesomeIcon sx={{ fontSize: 18, color: "#CA7403FF", mr: 1 }} />} />
          <DrawerLink text="Sale" path="/sales" startIcon={<LoyaltyIcon sx={{ fontSize: 18, color: "#CA7403FF", mr: 1 }} />} />
        </List>
      </Box>
    </Drawer>
  );
}

export default DrawerComponent;
