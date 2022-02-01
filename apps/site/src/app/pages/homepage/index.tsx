import { ActionCard } from "@patronage-web/shared";
import StarsImage from "../../../../../../libs/features/feedback/src/assets/stars-placeholder.png";
import * as Styled from "./styled";

export const Homepage: React.FC = () => {
  const actionCardDescription =
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <Styled.Box>
      <ActionCard
        description={actionCardDescription}
        image={StarsImage}
        button={{ variant: "contained", text: "New presentation" }}
      />
    </Styled.Box>
  );
};
