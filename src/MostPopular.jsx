import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import outfit1 from "./assets/mostPopular1.jpeg";
import outfit2 from "./assets/mostPopular2.jpeg";
import outfit3 from "./assets/mostPopular3.jpeg";
import outfit4 from "./assets/mostPopular4.jpeg";
import outfit5 from "./assets/mostPopular5.jpeg";
import outfit6 from "./assets/mostPopular6.jpeg";

function MostPopular() {
    const products = [
        { img: outfit1, name: "Classic Blue Wide-Leg Jeans", price: "$39.99" },
        { img: outfit2, name: "Black Basic Jacket", price: "$59.99" },
        { img: outfit3, name: "Elegant Brown Coat", price: "$99.99" },
        { img: outfit4, name: "Casual Chic Suit", price: "$119.99" },
        { img: outfit5, name: "Black Leather Blazer Jacket", price: "$79.99" },
        { img: outfit6, name: "Camel Trench Coat", price: "$89.99" },
    ];

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

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                {/* Sol ok */}
                <IconButton sx={{ color: "#8a5e3b", '&:hover': { color: "#231000FF" } }}>
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Ürünler */}
                <Grid container spacing={3} sx={{ maxWidth: 2000 }}>
                    {products.map((product, index) => (
                        <Grid item key={index} xs={4} sm={2} md={2} textAlign="center">
                            <img
                                src={product.img}
                                alt={product.name}
                                style={{
                                    width: "100%",
                                    height: "250px",
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
                                sx={{ fontWeight: 600, fontFamily: '"Playwrite AU TAS", cursive', color: "#3a3a3a" }}
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

                {/* Sağ ok */}
                <IconButton sx={{ color: "#8a5e3b", '&:hover': { color: "#231000FF" } }}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default MostPopular;
