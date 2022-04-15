import { Box, Typography } from "@mui/material";
import { HttpStatus } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant='h1' align='center'>
        {HttpStatus.NotFound}
      </Typography>
      <Styled.ResizableText align='center'>{t("notFoundPage.title")}</Styled.ResizableText>
    </Box>
  );
};

export default NotFoundPage;
