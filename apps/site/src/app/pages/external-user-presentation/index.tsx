import { Typography } from "@mui/material";
import { ExternalPresentationView } from "@patronage-web/features-feedback";
import { TranslationNamespace } from "@patronage-web/shared";
import { ExternalPresentationMock } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ExternalUserPresentationPage: React.FC = () => {
  const params = useParams();
  const { t } = useTranslation(TranslationNamespace.Feedback);

  const presentation = ExternalPresentationMock.id === params.id ? ExternalPresentationMock : undefined;

  return presentation ? (
    <ExternalPresentationView presentation={presentation} />
  ) : (
    <Typography variant='h1'>{t("notFoundPresentation")}</Typography>
  );
};

export default ExternalUserPresentationPage;
