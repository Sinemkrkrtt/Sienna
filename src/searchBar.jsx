import React, { useState } from "react";
import { InputBase, Box, List, ListItemButton, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ categories, onSelect }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (!value) {
            setResults([]);
            return;
        }

        const filtered = categories.filter(cat =>
            cat.name.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
    };

    const handleSelect = (cat) => {
        onSelect(cat);
        setQuery("");
        setResults([]);
    };

    return (
        <Box sx={{ position: "relative", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    padding: "10px 16px",
                    border: "none",
                    outline: "none",
                    marginTop: 4,
                    marginBottom: 2,
                }}
            >
                <SearchIcon sx={{ fontSize: 26, color: "#6D3500E1", mr: 1 }} />
                <InputBase
                    placeholder="Ara"
                    value={query}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                />
            </Box>

            {results.length > 0 && (
                <List
                    sx={{
                        position: "absolute",
                        top: "78px",
                        width: "99%",
                        backgroundColor: "#fff",
                        boxShadow: 10,
                        borderRadius: 5,
                        maxHeight: "200px",
                        overflowY: "auto",
                        zIndex: 10,

                    }}
                >
                    {results.map((cat) => (
                        <ListItemButton key={cat.name} onClick={() => handleSelect(cat)}>
                            <ListItemText primary={cat.name} />
                        </ListItemButton>
                    ))}
                </List>
            )}
        </Box>
    );
}
