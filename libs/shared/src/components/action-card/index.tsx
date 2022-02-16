import { ButtonProps } from "@mui/material";

import { BaseButton, ButtonType } from "../base-button";
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
          <Styled.CardActionButtonBox>
            <BaseButton type={ButtonType.Basic} variant={button.variant}>
              {button.text}
            </BaseButton>
          </Styled.CardActionButtonBox>
        </LocalizedLink>
      )}
    </Styled.CardActionBox>
  </Styled.ActionCard>
);
