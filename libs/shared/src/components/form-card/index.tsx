import * as Styled from "./styled";

export interface FormCardProps {
  children: React.FC;
}

export const FormCard: React.FC = ({ children }) => {
  return <Styled.FormCard>{children}</Styled.FormCard>;
};
