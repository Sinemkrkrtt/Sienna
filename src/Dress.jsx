
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import outfit1 from "./assets/newProducts10.jpeg";
import outfit2 from "./assets/Sales1.jpeg";
import outfit3 from "./assets/Sales9.jpeg";
import outfit4 from "./assets/dress4.jpeg";
import outfit5 from "./assets/dress5.jpeg";
import outfit6 from "./assets/dress6.jpeg";
import outfit7 from "./assets/dress7.jpeg";
import outfit8 from "./assets/dress8.jpeg";
import outfit9 from "./assets/dress9.jpeg";
import outfit10 from "./assets/dress10.jpeg";
import outfit11 from "./assets/dress11.jpeg";
import outfit12 from "./assets/dress12.jpeg";
import outfit13 from "./assets/dress13.jpeg";
import outfit14 from "./assets/dress14.jpeg";
import outfit15 from "./assets/dress15.jpeg";
import outfit16 from "./assets/dress16.jpeg";
import outfit17 from "./assets/dress17.jpeg";
import outfit18 from "./assets/dress18.jpeg";
import outfit19 from "./assets/dress19.jpeg";
import outfit20 from "./assets/dress20.jpeg";




function Dress() {
    const [favorites, setFavorites] = useState([]); // favoriler listesi
    const products = [
        { id: 9, img: outfit1, name: "Off-Shoulder Grey Knit Dress", price: "$69.99" },
        { id: 21, img: outfit2, name: "White Floral Mini Dress", price: "$79.99" },
        { id: 29, img: outfit3, name: "Butter Yellow Strappy Dress", price: "$94.99" },
        { id: 40, img: outfit4, name: "Cream Half-Sleeve Dresses", price: "$89.99" },
        { id: 41, img: outfit5, name: "Slit-Front Cobalt Satin Dress", price: "$109.99" },
        { id: 42, img: outfit6, name: "Thick-Strap Brown Maxi Dress", price: "$84.99" },
        { id: 43, img: outfit7, name: "Pink Floral Ruffled Dress", price: "$84.99" },
        { id: 44, img: outfit8, name: "White Cherry Patterned Dress", price: "$69.99" },
        { id: 45, img: outfit9, name: "Light Pink Tulle Mini Dress", price: "$89.99" },
        { id: 46, img: outfit10, name: "Cream Satin Dress ", price: "$129.99" },
        { id: 47, img: outfit11, name: "Green Dress with Gathered", price: "$109.99" },
        { id: 48, img: outfit12, name: "White Dress with Gold Buttons", price: "$99.99" },
        { id: 49, img: outfit13, name: "Baby Blue Off-Shoulder Dress", price: "$79.99" },
        { id: 50, img: outfit14, name: "Brown Shoulder Detailed Dress", price: "$104.99" },
        { id: 51, img: outfit15, name: "White V-Neck Knit Dress", price: "$114.99" },
        { id: 52, img: outfit16, name: "Red White Gingham Button Dress", price: "$69.99" },
        { id: 53, img: outfit17, name: "Sleeveless Green Dress", price: "$129.99" },
        { id: 54, img: outfit18, name: "Baby Blue Tulle Dress", price: "$149.99" },
        { id: 55, img: outfit19, name: "White Mini Dress ", price: "$124.99" },
        { id: 56, img: outfit20, name: "Brown Suede Long Dress ", price: "$109.99" },

    ];
    const toggleFavorite = (product) => {
        if (favorites.find(fav => fav.id === product.id)) {
            // zaten favorideyse çıkar
            setFavorites(favorites.filter(fav => fav.id !== product.id));
        } else {
            // favorilere ekle
            setFavorites([...favorites, product]);
        }
    };
    return (
        <Box sx={{ textAlign: "center", mt: 0, mb: 12, px: { xs: 2, md: 6 }, backgroundColor: "#fff", py: 5 }}>
            <Grid container spacing={3} justifyContent="center">
                {products.map((product, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3}> {/* md={2.4} yerine md={3} */}
                        <Card
                            sx={{
                                borderRadius: "2px",
                                textAlign: "left",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                width: 300,
                                maxWidth: 250,
                                height: 420,
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s ease",
                                position: "relative",  // Kalp ikonunun konumu için gerekli
                                "&:hover": { transform: "scale(1.03)" },
                            }}
                        >
                            {/* Kalp ikonu her zaman görünür */}
                            <IconButton
                                sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}
                                onClick={() => toggleFavorite(product)}
                                aria-label="add to favorites"
                            >
                                {favorites.find(fav => fav.id === product.id) ? (
                                    <FavoriteIcon sx={{ color: "#C9703DFF" }} />
                                ) : (
                                    <FavoriteBorderIcon sx={{ color: "#C9703DFF" }} />
                                )}
                            </IconButton>

                            <Box sx={{ height: 600, overflow: "hidden" }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={product.img}
                                    alt={product.name}
                                    sx={{ objectFit: "cover", width: "100%" }}
                                />
                            </Box>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 600,
                                        color: "#3a3a3a",
                                        minHeight: "40px",
                                        fontFamily: '"Playwrite AU TAS", cursive',
                                    }}
                                >
                                    {product.name}
                                </Typography>

                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1 }}>
                                    <Typography variant="body2" sx={{ color: "#6b6b6b", fontFamily: '"Playwrite AU TAS", cursive' }}>
                                        {product.price}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<ShoppingBagOutlinedIcon sx={{ color: "#fff" }} />}
                                        sx={{
                                            fontSize: 12,
                                            textTransform: "none",
                                            backgroundColor: "#73411F",
                                            "&:hover": { backgroundColor: "#5a3216" },
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}

export default Dress;
