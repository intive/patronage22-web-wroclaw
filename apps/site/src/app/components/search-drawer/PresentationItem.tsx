import { LocalizedLink, PagePath } from "@patronage-web/shared";
import Fuse from "fuse.js";

import * as Styled from "./styled";

interface PresentationListProps {
  onClose: () => void;
  presentation: Fuse.FuseResult<{
    title: string;
    id: string;
    data: string[];
  }>;
}
export const PresentationItem: React.FC<PresentationListProps> = ({ onClose, presentation }) => {
  return (
    <LocalizedLink
      to={PagePath.EditPresentation}
      routerParams={{ id: presentation.item.id }}
      key={presentation.item.id}
      style={{ textDecoration: "none" }}
    >
      <Styled.ListItem onClick={onClose} key={presentation.item.id}>
        {presentation.item.title}
      </Styled.ListItem>
    </LocalizedLink>
  );
};
