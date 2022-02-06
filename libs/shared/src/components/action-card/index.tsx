import { ButtonProps } from "@mui/material";

import { AppRoute } from "../../types";
import * as Styled from "./styled";

export interface ActionCardProps {
  image?: string;
  description: string;
  button?: { variant: ButtonProps["variant"]; text: string; linkTo?: AppRoute };
}

export const ActionCard: React.FC<ActionCardProps> = ({ image, description, button }: ActionCardProps) => (
  <Styled.Card>
    {image && <Styled.CardMedia image={image} />}

    <Styled.Box>
      <Styled.Typography>{description}</Styled.Typography>

      {button && (
        <Styled.Button variant={button.variant} href={button.linkTo}>
          {button.text}
        </Styled.Button>
      )}
    </Styled.Box>
  </Styled.Card>
);
