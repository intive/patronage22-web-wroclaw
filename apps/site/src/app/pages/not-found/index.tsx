import { CardMedia } from "@mui/material";
import { HttpStatus, NotFoundImage } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    // TODO - replace when proper data will be delivered
    <>
      <Styled.MediumImageWrapper>
        <CardMedia component='img' alt={`${HttpStatus.NotFound}`} src={NotFoundImage} />
      </Styled.MediumImageWrapper>

      <h1>{t("notFoundPage.info")}</h1>
    </>
  );
};

export default NotFoundPage;
