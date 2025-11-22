import React from 'react';
import { Box, Typography } from "@mui/material";

function Favorites({ favorites }) { // favorites prop olarak al
    return (
        <Box mt={4}>
            <Typography variant="h6">Favoriler:</Typography>
            {favorites.length === 0 ? (
                <Typography>Favori ürün yok</Typography>
            ) : (
                favorites.map(fav => (
                    <Typography key={fav.id}>{fav.name}</Typography>
                ))
            )}
        </Box>
    );
}

export default Favorites;
