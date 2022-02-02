import { ButtonProps } from "@mui/material";
import * as Styled from "./styled";

export interface ActionCardProps {
  image?: string;
  description: string;
  button?: { variant: ButtonProps["variant"]; text: string };
}

export const ActionCard: React.FC<ActionCardProps> = ({ image, description, button }: ActionCardProps) => (
  <Styled.Card>
    {image && <Styled.CardMedia image={image} />}

    <Styled.Box>
      <Styled.Typography>{description}</Styled.Typography>

      {button && <Styled.Button variant={button.variant}>{button.text}</Styled.Button>}
    </Styled.Box>
  </Styled.Card>
);
