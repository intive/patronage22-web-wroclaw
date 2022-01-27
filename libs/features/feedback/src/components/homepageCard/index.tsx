import { CardMedia, Typography } from "@mui/material";
import StarsImage from "../../assets/starsPlaceholder.png";
import { HomepageButton } from "./homepageButton/index";
import { StyledCard, StyledCardBox } from "./styles";

export const HomepageCard: React.FC = () => (
  <StyledCard>
    <CardMedia
      component='img'
      image={StarsImage}
      alt='Stars'
      sx={{ maxWidth: "100%", maxHeight: "180px", "@media (min-width: 600px)": { maxWidth: "30%" } }}
    />
    <StyledCardBox>
      <Typography>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <HomepageButton text='New presentation' />
    </StyledCardBox>
  </StyledCard>
);
