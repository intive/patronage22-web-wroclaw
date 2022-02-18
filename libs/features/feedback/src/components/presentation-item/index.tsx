import { LocalizedLink, PagePath } from "@patronage-web/shared";
import Fuse from "fuse.js";

import * as Styled from "./styled";

interface PresentationItemProps {
  onClose: () => void;
  presentation: Fuse.FuseResult<{
    title: string;
    id: string;
    data: string[];
  }>;
}
export const PresentationItem: React.FC<PresentationItemProps> = ({ onClose, presentation }) => {
  const { title, id } = presentation.item;
  return (
    <LocalizedLink to={PagePath.EditPresentation} routerParams={{ id }} key={id} style={{ textDecoration: "none" }}>
      <Styled.ListItem onClick={onClose} key={id}>
        {title}
      </Styled.ListItem>
    </LocalizedLink>
  );
};
