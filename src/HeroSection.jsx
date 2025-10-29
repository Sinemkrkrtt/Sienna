import React from "react";
import { Box } from "@mui/material";
import siennaImage from "/Users/sinem/Desktop/e-ticaret/e-ticaret/src/assets/sienna.png"; // Göreli yol

function HeroSection() {
    return (
        <Box
            sx={{
                width: 1500,
                height: 590,
                backgroundImage: `url(${siennaImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 2,
                margin: "0 auto", // Ortalamak için
            }}
        />
    );
}

export default HeroSection;
