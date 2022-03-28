import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant='h1' align='center'>
        404
      </Typography>
      <Typography variant='h3' align='center'>
        {t("notFoundPage.title")}
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
