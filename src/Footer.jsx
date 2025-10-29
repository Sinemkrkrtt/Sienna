import React from "react";
import { Box, Typography, IconButton, Stack, Divider, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#5C3216FF",
                color: "white",
                padding: { xs: 4, md: 6 },
                mt: "auto",
            }}
        >
            <Typography
                variant="h5"
                sx={{ textAlign: "center", mb: 3, fontFamily: '"Montserrat", sans-serif' }}
            >
                Quick Links
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "flex-start" },
                    gap: 4,
                }}
            >
                {/* Marka ve kısa açıklama */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontFamily: '"Playwrite AU TAS", cursive', mb: 1 }}>
                        Sienna
                    </Typography>
                    <Typography variant="body2" sx={{ maxWidth: 250 }}>
                        Trendy, şık ve kaliteli moda ürünleri ile stilinizi tamamlayın.
                    </Typography>
                </Box>

                {/* Quick Links 3 sütun */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 6,
                        flex: 2,
                        justifyContent: "center",
                        marginRight: 10,

                    }}
                >
                    {/* 1. Grup */}
                    <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Main</Typography>
                        <Link href="/" underline="hover" sx={{ color: "white" }}>Home</Link>
                        <Link href="/woman" underline="hover" sx={{ color: "white" }}>Women</Link>
                        <Link href="/man" underline="hover" sx={{ color: "white" }}>Men</Link>
                        <Link href="/new-collections" underline="hover" sx={{ color: "white" }}>New Collections</Link>
                        <Link href="/sales" underline="hover" sx={{ color: "white" }}>On Sales</Link>
                    </Stack>

                    {/* 2. Grup */}
                    <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Tops</Typography>
                        <Link href="/" underline="hover" sx={{ color: "white" }}>Jacket/Coat</Link>
                        <Link href="/woman" underline="hover" sx={{ color: "white" }}>Sweatshirt / Hoodie</Link>
                        <Link href="/man" underline="hover" sx={{ color: "white" }}>Blouse/Jumper</Link>
                        <Link href="/new-collections" underline="hover" sx={{ color: "white" }}>T-Shirt</Link>
                        <Link href="/sales" underline="hover" sx={{ color: "white" }}>Shirt</Link>
                    </Stack>

                    {/* 3. Grup */}
                    <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Bottoms & Accessories</Typography>
                        <Link href="/" underline="hover" sx={{ color: "white" }}>Jeans/Pants</Link>
                        <Link href="/woman" underline="hover" sx={{ color: "white" }}>Skirt</Link>
                        <Link href="/man" underline="hover" sx={{ color: "white" }}>Dress</Link>
                        <Link href="/new-collections" underline="hover" sx={{ color: "white" }}>Boots</Link>
                        <Link href="/sales" underline="hover" sx={{ color: "white" }}>Bag</Link>
                    </Stack>
                </Box>
                {/* Footer’ın diğer içeriklerinin altına */}
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 15 }}>
                    <IconButton sx={{ color: "white" }} aria-label="Facebook">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} aria-label="Instagram">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} aria-label="Twitter">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white" }} aria-label="Email">
                        <EmailIcon />
                    </IconButton>
                </Stack>
            </Box>

            <Divider sx={{ my: 3, backgroundColor: "white" }} />

            <Typography variant="body2" sx={{ textAlign: "center" }}>
                © {new Date().getFullYear()} Sienna. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
