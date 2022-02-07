import { ButtonProps } from "@mui/material";

import { AppRoute } from "../../types";
import * as Styled from "./styled";

export interface ActionCardProps {
  image?: string;
  description: string;
  button?: { variant: ButtonProps["variant"]; text: string; navigateTo: AppRoute };
}

export const ActionCard: React.FC<ActionCardProps> = ({ image, description, button }: ActionCardProps) => (
  <Styled.ActionCard>
    {image && <Styled.CardMedia image={image} />}
    <Styled.CardActionBox>
      <Styled.CardActionDescription>{description}</Styled.CardActionDescription>
      {/* TODO - replace href with Link component after P2022-685 is ready */}
      {button && (
        <Styled.CardActionButton variant={button.variant} href={button.navigateTo}>
          {button.text}
        </Styled.CardActionButton>
      )}
    </Styled.CardActionBox>
  </Styled.ActionCard>
);
