import { Box } from "@mui/material";
import { HomepageCard } from "../components/homepage-card/index";

export const Homepage: React.FC = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <HomepageCard />
  </Box>
);
