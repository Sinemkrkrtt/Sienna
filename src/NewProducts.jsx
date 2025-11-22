import React, { useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import outfit1 from "./assets/newProducts1.jpeg";
import outfit2 from "./assets/newProducts2.jpeg";
import outfit3 from "./assets/newProducts3.jpeg";
import outfit5 from "./assets/newProducts5.png";
import outfit6 from "./assets/newProducts6.png";
import outfit7 from "./assets/newProducts7.jpeg";
import outfit8 from "./assets/newProducts8.jpeg";
import outfit9 from "./assets/newProducts9.jpeg";
import outfit10 from "./assets/newProducts10.jpeg";
import outfit11 from "./assets/newProducts11.jpeg";

function NewProducts() {
    const products = [
        { img: outfit1, name: "Cropped Brown Jacket", price: "$99.99" },
        { img: outfit2, name: "Beige Poncho Jacket", price: "$89.99" },
        { img: outfit3, name: "Beige Velvet Coat", price: "$109.99" },
        { img: outfit5, name: "Brown Leather Boots", price: "$139.99" },
        { img: outfit6, name: "Luxury Brown Bag", price: "$69.99" },
        { img: outfit7, name: "White Puffer Jacket", price: "$129.99" },
        { img: outfit8, name: "Brown Tracksuit", price: "$79.99" },
        { img: outfit9, name: "Burgundy Leather Gloves", price: "$69.99" },
        { img: outfit10, name: "Off-Shoulder Grey Knit Dress", price: "$89.99" },
        { img: outfit11, name: "Navy Blue Shirt", price: "$49.99" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 5; // Ekranda 5 ürün gözüksün

    const handleNext = () => {
        if (currentIndex + visibleCount < products.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

    return (
        <Box sx={{ textAlign: "center", mt: 7, mb: 12 }}>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: 6,
                    fontFamily: '"Playwrite AU TAS", cursive',
                }}
            >
                New Products
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Sol Ok */}
                <IconButton
                    sx={{ color: "#8a5e3b", "&:hover": { color: "#231000FF" }, mx: 1 }}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Ürünler */}
                <Grid
                    container
                    spacing={3}
                    sx={{
                        maxWidth: "1100px", // 5 ürün için ideal genişlik
                        justifyContent: "center",
                    }}
                >
                    {visibleProducts.map((product, index) => (
                        <Grid item key={index} xs={6} sm={4} md={2.4} textAlign="center">
                            <img
                                src={product.img}
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: 260,  // Tüm kutular eşit boy
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    marginBottom: "10px",
                                    transition: "transform 0.3s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: '"Playwrite AU TAS", cursive',
                                    color: "#3a3a3a",
                                    minHeight: "40px", // Uzun isimler eşit yükseklik
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "#6b6b6b", fontFamily: '"Playwrite AU TAS", cursive' }}
                            >
                                {product.price}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* Sağ Ok */}
                <IconButton
                    sx={{ color: "#8a5e3b", "&:hover": { color: "#231000FF" }, mx: 1 }}
                    onClick={handleNext}
                    disabled={currentIndex + visibleCount >= products.length}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default NewProducts;
