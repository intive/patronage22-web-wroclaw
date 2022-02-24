import { ItemsType, LocalizedLink, PagePath } from "@patronage-web/shared";

import * as Styled from "./styled";

interface SearchItemProps {
  onClose: () => void;
  item: ItemsType;
  toResult: PagePath;
}

export const SearchItem: React.FC<SearchItemProps> = ({ onClose, item, toResult }) => {
  return (
    <LocalizedLink to={toResult} routerParams={{ id: item.id }} key={item.id}>
      <Styled.SearchItemDetail onClick={onClose} key={item.id}>
        {item.title}
      </Styled.SearchItemDetail>
    </LocalizedLink>
  );
};
