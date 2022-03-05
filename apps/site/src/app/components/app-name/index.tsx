import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const AppName: React.FC = () => {
  const { t } = useTranslation();

  return <Typography>Intive Patronage 2022 | {t("intive.wroclaw")}</Typography>;
};
