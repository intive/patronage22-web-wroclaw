import { ButtonProps } from "@mui/material";

import { LocalizedLink, LocalizedLinkProps } from "../localized-link";
import * as Styled from "./styled";

export interface ActionCardProps {
  image?: string;
  description: string;
  button?: { variant: ButtonProps["variant"]; text: string; navigateTo: LocalizedLinkProps["to"] };
}

export const ActionCard: React.FC<ActionCardProps> = ({ image, description, button }: ActionCardProps) => (
  <Styled.ActionCard>
    {image && <Styled.ActionCardMedia image={image} />}
    <Styled.CardActionBox>
      <Styled.CardActionDescription>{description}</Styled.CardActionDescription>
      {button && (
        <LocalizedLink to={button.navigateTo}>
          <Styled.CardActionButton variant={button.variant}>{button.text}</Styled.CardActionButton>
        </LocalizedLink>
      )}
    </Styled.CardActionBox>
  </Styled.ActionCard>
);
