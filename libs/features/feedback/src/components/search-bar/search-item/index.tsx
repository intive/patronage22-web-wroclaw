import { LocalizedLink, PagePath } from "@patronage-web/shared";

import * as Styled from "./styled";

interface SearchItemProps {
  onClose: () => void;
  title: string;
  id: string;
}
export const SearchItem: React.FC<SearchItemProps> = ({ onClose, title, id }) => {
  return (
    <LocalizedLink to={PagePath.EditPresentation} routerParams={{ id }} key={id}>
      <Styled.ListItem onClick={onClose} key={id}>
        {title}
      </Styled.ListItem>
    </LocalizedLink>
  );
};
