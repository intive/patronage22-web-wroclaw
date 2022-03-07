import { AppRouteType } from "../../../types/app-routes";
import { LocalizedLink } from "../../localized-link";
import { PresentationSearchItem } from "../types";
import * as Styled from "./styled";

interface SearchItemProps {
  onClose: () => void;
  item: PresentationSearchItem;
  toResult: AppRouteType;
}

export const SearchItem: React.FC<SearchItemProps> = ({ onClose, item, toResult }) => (
  <LocalizedLink to={toResult} routerParams={{ id: item.id }} key={item.id}>
    <Styled.SearchItemDetail onClick={onClose} key={item.id}>
      {item.title}
    </Styled.SearchItemDetail>
  </LocalizedLink>
);
