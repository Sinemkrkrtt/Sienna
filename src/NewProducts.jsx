import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import outfit1 from "./assets/newProducts1.jpeg";
import outfit2 from "./assets/newProducts2.jpeg";
import outfit3 from "./assets/newProducts3.jpeg";
import outfit5 from "./assets/newProducts5.png";
import outfit6 from "./assets/newProducts6.png";

function NewProducts() {
    const products = [
        { img: outfit1, name: "Cropped Brown Jacket", price: "$99.99" },
        { img: outfit2, name: "Beige Poncho Jacket", price: "$89.99" },
        { img: outfit3, name: "Beige Velvet Coat", price: "$109.99" },
        { img: outfit5, name: "Brown Leather Boots", price: "$139.99" },
        { img: outfit6, name: "Luxury Brown Bag", price: "$69.99" },
    ];

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

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                {/* Sol ok */}
                <IconButton sx={{ color: "#8a5e3b", '&:hover': { color: "#231000FF" } }}>
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Ürünler */}
                <Grid container spacing={3} sx={{ maxWidth: 2000 }}>
                    {products.map((product, index) => (
                        <Grid item key={index} xs={6} sm={3} textAlign="center">
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

export default NewProducts;
