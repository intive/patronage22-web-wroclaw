import { ItemsType } from "../../../../data/features/feedback/mocks/items";
import { AppRouteType } from "../../../types/app-routes";
import { LocalizedLink } from "../../localized-link";
import * as Styled from "./styled";

interface SearchItemProps {
  onClose: () => void;
  item: ItemsType;
  toResult: AppRouteType;
}

export const SearchItem: React.FC<SearchItemProps> = ({ onClose, item, toResult }) => (
  <LocalizedLink to={toResult} routerParams={{ id: item.id }} key={item.id}>
    <Styled.SearchItemDetail onClick={onClose} key={item.id}>
      {item.title}
    </Styled.SearchItemDetail>
  </LocalizedLink>
);
