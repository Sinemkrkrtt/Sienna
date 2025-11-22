import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import outfit1 from "./assets/newProducts15.jpeg";
import outfit2 from "./assets/Sales4.jpeg";
import outfit3 from "./assets/Sales18.jpeg";
import outfit4 from "./assets/Shoe4.jpeg";
import outfit5 from "./assets/Shoe5.jpeg";
import outfit6 from "./assets/Shoe6.jpeg";
import outfit7 from "./assets/Shoe7.jpeg";
import outfit8 from "./assets/Shoe8.jpeg";
import outfit9 from "./assets/Shoe9.jpeg";
import outfit10 from "./assets/Shoe10.jpeg";
import outfit11 from "./assets/Shoe11.jpeg";
import outfit12 from "./assets/Shoe12.jpeg";
import outfit13 from "./assets/Shoe13.jpeg";
import outfit14 from "./assets/Shoe14.jpeg";
import outfit15 from "./assets/Shoe15.jpeg";
import outfit16 from "./assets/Shoe16.jpeg";
import outfit17 from "./assets/Shoe17.jpeg";
import outfit18 from "./assets/Shoe18.jpeg";
import outfit19 from "./assets/Shoe19.jpeg";
import outfit20 from "./assets/Shoe20.jpeg";




function WomanShoes() {
    const [favorites, setFavorites] = useState([]); // favoriler listesi
    const products = [
        { id: 14, img: outfit1, name: "Black Convertible Boots", price: "$89.99" },
        { id: 24, img: outfit2, name: "Green Sandals", oldprice: "89.99", price: "$64.99" },
        { id: 38, img: outfit3, name: "Black Ballet Flats", price: "$49.99" },
        { id: 57, img: outfit4, name: "Burgundy Platform Mary Jane", price: "$89.99" },
        { id: 58, img: outfit5, name: "Black Pointy Sock Boot", price: "$109.99" },
        { id: 59, img: outfit6, name: "Brown Suede Lace-Up Shoes", price: "$84.99" },
        { id: 60, img: outfit7, name: "Black Pointed Toe Heels", price: "$84.99" },
        { id: 61, img: outfit8, name: "Burgundy Square Toe Sandals", price: "$69.99" },
        { id: 62, img: outfit9, name: "Leopard Stiletto Pump", price: "$89.99" },
        { id: 63, img: outfit10, name: "Retro High-Top Sneaker", price: "$129.99" },
        { id: 64, img: outfit11, name: "Black Ankle Strap Sandal", price: "$109.99" },
        { id: 65, img: outfit12, name: "Floral Print Flats", price: "$99.99" },
        { id: 66, img: outfit13, name: "Rose Lace-Up Heels", price: "$79.99" },

        { id: 67, img: outfit14, name: "White Sneaker", price: "$104.99" },
        { id: 68, img: outfit15, name: "Black Single Strap Stiletto", price: "$114.99" },
        { id: 69, img: outfit16, name: "Pink Pastel Heart Sneaker", price: "$69.99" },
        { id: 70, img: outfit17, name: "Brown Square Toe Block Heel", price: "$129.99" },
        { id: 71, img: outfit18, name: "Wine Tall Boot", price: "$149.99" },
        { id: 72, img: outfit19, name: "Metallic Stiletto", price: "$124.99" },
        { id: 73, img: outfit20, name: "White Glitter Sneaker", price: "$109.99" },
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

export default WomanShoes;
