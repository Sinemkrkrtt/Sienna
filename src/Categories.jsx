import { Box, Typography } from "@mui/material";
import woman from "./assets/woman.png";
import man from "./assets/man.png";
import newCollections from "./assets/newCollections.png";
import sales from "./assets/sales.png";
import { useNavigate } from "react-router-dom";
import Woman from "./Woman.jsx";
import Man from "./Man.jsx";
import NewCollections from "./NewCollections.jsx";
import Sales from "./Sales.jsx"



function Categories() {
    const navigate = useNavigate();
    return (

        <div>
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    marginTop: 15,
                    marginBottom: 4,
                    fontFamily: '"Playwrite AU TAS", cursive',
                }}
            >

            </Typography>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "470px 300px 300px",
                    gridTemplateRows: "400px 400px",
                    gap: "8px",
                    marginLeft: "205px",
                }}
            >
                {/* Üst sıra */}
                <Box sx={{
                    backgroundColor: "#B6885D",
                    backgroundImage: `url(${woman})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    gridColumn: "1"
                }}
                    onClick={() => navigate('/woman')}
                ></Box>
                <Box sx={{
                    backgroundColor: "#B6885D",
                    backgroundImage: `url(${man})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    gridColumn: "2"
                }}
                    onClick={() => navigate('/man')}
                ></Box>
                <Box
                    sx={{
                        backgroundColor: "#B6885D",
                        backgroundImage: `url(${newCollections})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        gridColumn: "3",
                        gridRow: "1 / span 2", // sağdaki uzun kutu iki sırayı kaplasın
                    }}
                    onClick={() => navigate('/newCollections')}
                ></Box>

                {/* Alt sıra */}
                <Box
                    sx={{
                        backgroundColor: "#B6885D",
                        backgroundImage: `url(${sales})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        gridColumn: "1 / span 2", // alttaki uzun kutu soldaki iki kutunun altını kapsasın
                    }}
                    onClick={() => navigate('/sales')}
                ></Box>
            </div>
            <Typography
                variant="h4"
                sx={{
                    textAlign: "center",
                    marginTop: 12,
                    marginBottom: 5,
                    fontFamily: '"Playwrite AU TAS", cursive',
                }}
            >

            </Typography>
        </div>
    );
}

export default Categories;
