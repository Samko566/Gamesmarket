import { TextField, IconButton, Box, Typography, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { bottom_search_text } from "./styles/bottom_search_text";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { rootStore } = useContext(Context);
  const { filterStore } = rootStore;
  const navigate = useNavigate();

  const handleSearch = async () => {
    await filterStore.searchGames(searchQuery);
    navigate("/search-results");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
      <Box sx={{ mt: 2, display: "flex", width: "100%" }}>
        <TextField
          type="search"
          placeholder="What are you looking for?"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            flexGrow: 1,
            backgroundColor: "white",
            borderRadius: "4px 0 0 4px",
            "& .MuiOutlinedInput-root": {
              height: "50px",
            },
          }}
        />
        <IconButton
          sx={{
            backgroundColor: "#ff4020",
            color: "white",
            borderRadius: "0 4px 4px 0",
            padding: "10px 15px",
            height: "50px",
            "&:hover": {
              backgroundColor: "#e0391d",
            },
          }}
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      <Box sx={{ mt: 1.5, mb: 1.5, width: "100%" }}>
        <Typography sx={bottom_search_text.typography}>
          <Link
            component={ReactRouterLink}
            to="/games"
            underline="none"
            sx={{ mr: 3, color: "inherit" }}
          >
            All Games
          </Link>
          <Link
            component={ReactRouterLink}
            to="/new-games"
            underline="none"
            sx={{ color: "inherit" }}
          >
            New arrivals
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Search;
