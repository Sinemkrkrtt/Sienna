import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import outfit1 from "./assets/Sales1.jpeg";
import outfit2 from "./assets/Sales2.jpeg";
import outfit3 from "./assets/Sales3.jpeg";
import outfit5 from "./assets/Sales4.jpeg";
import outfit6 from "./assets/Sales5.jpeg";
import outfit7 from "./assets/Sales6.jpeg";
import outfit8 from "./assets/Sales7.jpeg";
import outfit9 from "./assets/Sales8.jpeg";
import outfit10 from "./assets/Sales9.jpeg";
import outfit11 from "./assets/Sales10.jpeg";
import outfit12 from "./assets/Sales11.jpeg";
import outfit13 from "./assets/Sales12.jpeg";
import outfit14 from "./assets/Sales13.jpeg";
import outfit15 from "./assets/Sales14.jpeg";
import outfit16 from "./assets/Sales15.jpeg";
import outfit17 from "./assets/Sales16.jpeg";
import outfit18 from "./assets/Sales17.jpeg";
import outfit19 from "./assets/Sales18.jpeg";
import outfit20 from "./assets/Sales19.jpeg";
import outfit21 from "./assets/Sales20.jpeg";

function Sales() {
    const [favorites, setFavorites] = useState([]); // favoriler listesi
    const products = [
        { id: 21, img: outfit1, name: "White Floral Mini Dress", oldprice: "89.99", price: "$79.99" },
        { id: 22, img: outfit2, name: "Beige Shorts and Shirt Set", oldprice: "119.99", price: "$89.99" },
        { id: 23, img: outfit3, name: "Denim Short Jumpsuit", oldprice: "69.99", price: "$49.99" },
        { id: 24, img: outfit5, name: "Green Sandals", oldprice: "89.99", price: "$64.99" },
        { id: 25, img: outfit6, name: "Beige Fabric Pants", oldprice: "54.99", price: "$44.99" },
        { id: 26, img: outfit7, name: "Yellow Floral Long Skirt", oldprice: "79.99", price: "$64.99" },
        { id: 27, img: outfit8, name: "Straw Hat", oldprice: "69.99", price: "$49.99" },
        { id: 28, img: outfit9, name: "Brown Frame Oval Glasses", oldprice: "109.99", price: "$89.99" },
        { id: 29, img: outfit10, name: "Butter Yellow Strappy Dress", oldprice: "139.99", price: "$119.99" },
        { id: 30, img: outfit11, name: "Green Fitted Waist Blouse", oldprice: "89.99", price: "$79.99" },
        { id: 31, img: outfit12, name: "Light Blue Knit T-Shirt", oldprice: "79.99", price: "$59.99" },
        { id: 32, img: outfit13, name: "Brown Draped Mini Skirt", oldprice: "74.99", price: "$54.99" },
        { id: 33, img: outfit14, name: "Cream Shorts", oldprice: "69.99", price: "$44.99" },
        { id: 34, img: outfit15, name: "Gray Loose Sweatpants", oldprice: "54.99", price: "$39.99" },
        { id: 35, img: outfit16, name: "Steel Multi-Chain Bracelet with Finger Rings", oldprice: "89.99", price: "$69.99" },
        { id: 36, img: outfit17, name: "Woven Straw Bag", oldprice: "99.99", price: "$79.99" },
        { id: 37, img: outfit18, name: "White Blouse with Brown Leather Belt", oldprice: "109.99", price: "$99.99" },
        { id: 38, img: outfit19, name: "Black Ballet Flats", oldprice: "89.99", price: "$74.99" },
        { id: 39, img: outfit20, name: "White Sleeveless Blouse with Gold Button Details", oldprice: "74.99", price: "$59.99" },
        { id: 40, img: outfit21, name: "Cream Raincoat", oldprice: "124.99", price: "$109.99" },
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

                                {/* Fiyat ve sepete ekle aynı hizada */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#a0a0a0", textDecoration: "line-through", fontFamily: '"Playwrite AU TAS", cursive' }}
                                        >
                                            ${product.oldprice} {/* $ işareti ekledim */}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#6b6b6b", fontWeight: 600, fontFamily: '"Playwrite AU TAS", cursive' }}
                                        >
                                            {product.price}
                                        </Typography>
                                    </Box>

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

export default Sales;
