import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import outfit1 from "./assets/newProducts21.jpeg";
import outfit2 from "./assets/Sales6.jpeg";
import outfit3 from "./assets/Sales12.jpeg";
import outfit4 from "./assets/skirt4.jpeg";
import outfit5 from "./assets/skirt5.jpeg";
import outfit6 from "./assets/skirt6.jpeg";
import outfit7 from "./assets/skirt7.jpeg";
import outfit8 from "./assets/skirt8.jpeg";
import outfit9 from "./assets/skirt9.jpeg";
import outfit10 from "./assets/skirt10.jpeg";
import outfit11 from "./assets/skirt11.jpeg";
import outfit12 from "./assets/skirt12.jpeg";
import outfit13 from "./assets/skirt13.jpeg";
import outfit14 from "./assets/skirt14.jpeg";
import outfit15 from "./assets/skirt15.jpeg";
import outfit16 from "./assets/skirt16.jpeg";
import outfit17 from "./assets/skirt17.jpeg";
import outfit18 from "./assets/skirt18.jpeg";
import outfit19 from "./assets/skirt19.jpeg";
import outfit20 from "./assets/skirt20.jpeg";


function Skirt() {
    const [favorites, setFavorites] = useState([]); // favoriler listesi
    const products = [
        { id: 20, img: outfit1, name: "Emerald Velvet Maxi Skirt", price: "$69.99" },
        { id: 26, img: outfit2, name: "Yellow Floral Long Skirt", oldprice: "79.99", price: "$64.99" },
        { id: 32, img: outfit3, name: "Brown Draped Mini Skirt", oldprice: "74.99", price: "$54.99" },
        { id: 74, img: outfit4, name: "Gray High Slit Wool Skirt", price: "$89.99" },
        { id: 75, img: outfit5, name: "Pink Pleated Mini Skirt", price: "$59.99" },
        { id: 76, img: outfit6, name: "Polka Dot Tiered Maxi Skirt", price: "$104.99" },
        { id: 77, img: outfit7, name: "Buckle Detail Mini Skirt", price: "$74.99" },
        { id: 78, img: outfit8, name: "Cargo Pocket Pleated Mini Skirt", price: "$69.99" },
        { id: 79, img: outfit9, name: "White Lace Maxi Skirt", price: "44.99" },
        { id: 80, img: outfit10, name: "High-Waist Leopard Maxi Skirt", price: "$79.99" },
        { id: 81, img: outfit11, name: "Tiered Ruffle Maxi Skirt", price: "$64.99" },
        { id: 82, img: outfit12, name: "Fringe Suede Maxi Skirt", price: "$59.99" },
        { id: 83, img: outfit13, name: "Pink Sparkle Mini Skirt", price: "$99.99" },
        { id: 84, img: outfit14, name: "Black Tulle Layered Skirt", price: "$84.99" },
        { id: 85, img: outfit15, name: "Lilac Satin Bias Cut Skirto", price: "$74.99" },
        { id: 86, img: outfit16, name: "High-Low Denim Maxi Skirt", price: "$64.99" },
        { id: 87, img: outfit17, name: "Cream Ribbed Knit Maxi Skirt", price: "$99.99" },
        { id: 88, img: outfit18, name: "High-Waist Camel Mini Skirt", price: "$49.99" },
        { id: 89, img: outfit19, name: "Voluminous Tulle Long Skirt", price: "$84.99" },
        { id: 90, img: outfit20, name: "Cream A-Line Skirt", price: "$59.99" },
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

export default Skirt;
