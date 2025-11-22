import React, { useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import outfit1 from "./assets/mostPopular1.jpeg";
import outfit2 from "./assets/mostPopular2.jpeg";
import outfit3 from "./assets/mostPopular3.jpeg";
import outfit4 from "./assets/mostPopular4.jpeg";
import outfit5 from "./assets/mostPopular5.jpeg";
import outfit6 from "./assets/mostPopular6.jpeg";
import outfit7 from "./assets/mostPopular7.jpeg";
import outfit8 from "./assets/mostPopular8.jpeg";
import outfit9 from "./assets/mostPopular9.jpeg";
import outfit10 from "./assets/mostPopular10.jpeg";
import outfit11 from "./assets/mostPopular11.jpeg";

function MostPopular() {

    const products = [
        { img: outfit1, name: "Classic Blue Wide-Leg Jeans", price: "$39.99" },
        { img: outfit2, name: "Black Basic Jacket", price: "$59.99" },
        { img: outfit3, name: "Elegant Brown Coat", price: "$129.99" },
        { img: outfit4, name: "Casual Chic Suit", price: "$89.99" },
        { img: outfit5, name: "Black Leather Blazer Jacket", price: "$69.99" },
        { img: outfit6, name: "Camel Trench Coat", price: "$89.99" },
        { img: outfit7, name: "Navy Blue Vest & Trousers Set", price: "$49.99" },
        { img: outfit8, name: "Brown Block Heel Boots", price: "$78.99" },
        { img: outfit9, name: "Brown Velvet Jacket", price: "$79.99" },
        { img: outfit10, name: "Brown Avant-Garde Watch", price: "$159.99" },
        { img: outfit11, name: "White Wool Sweater", price: "$49.99" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleCount = 5; // 👈 ekranda sadece 5 ürün göster

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
        <Box sx={{ textAlign: "center", mt: 10, mb: 12 }}>

            <Typography
                variant="h4"
                sx={{
                    marginBottom: 6,
                    fontFamily: '"Playwrite AU TAS", cursive',
                }}
            >
                Most Popular
            </Typography>

            {/* ----- ÜRÜNLER + OKLAR ALANI ----- */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                {/* Sol Ok */}
                <IconButton
                    sx={{ color: "#8a5e3b", "&:hover": { color: "#231000FF" }, mx: 1 }}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Ürünlerin olduğu GRID */}
                <Grid
                    container
                    spacing={3}
                    sx={{
                        maxWidth: "1100px",     // 👈 ürünlerin sığması için ideal genişlik
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
                                    height: 260,
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
                                    minHeight: "40px",
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

export default MostPopular;
