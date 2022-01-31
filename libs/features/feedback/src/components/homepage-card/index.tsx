import { CardMedia } from "@mui/material";
import StarsImage from "../../assets/stars-placeholder.png";
import { HomepageButton } from "./homepage-button/index";
import { StyledCard, StyledCardBox, StyledTypography } from "./styles";

export const HomepageCard: React.FC = () => (
  <StyledCard>
    <CardMedia
      component='img'
      image={StarsImage}
      alt='Stars'
      sx={{ maxWidth: "100%", maxHeight: "176px", "@media (min-width: 600px)": { maxWidth: "30%" } }}
    />

    <StyledCardBox>
      <StyledTypography>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </StyledTypography>

      <HomepageButton />
    </StyledCardBox>
  </StyledCard>
);
