import { CardMedia } from "@mui/material";
import { StyledButton, StyledCard, StyledTypography } from "./styles";

export const HomepageCard: React.FC = () => (
  <StyledCard>
    <CardMedia />
    <StyledTypography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper tellus nec velit placerat pretium. Praesent eleifend
      diam vel ligula rutrum, et consectetur urna ullamcorper. Mauris vestibulum at velit non euismod. Sed sollicitudin orci sed
      turpis sollicitudin, vitae finibus metus malesuada.
    </StyledTypography>
    <StyledButton>New presentation</StyledButton>
  </StyledCard>
);
