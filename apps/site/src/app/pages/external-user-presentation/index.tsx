import { Typography } from "@mui/material";
import { ExternalPresentationView } from "@patronage-web/features-feedback";
import { ExternalPresentationMock } from "@patronage-web/shared-data";
import { useParams } from "react-router-dom";

const ExternalUserPresentationPage: React.FC = () => {
  const params = useParams();

  const presentation = ExternalPresentationMock.id === params.id ? ExternalPresentationMock : undefined;

  return presentation ? (
    <ExternalPresentationView presentation={presentation} />
  ) : (
    <Typography>Nie znaleziono prezentacji</Typography>
  );
};

export default ExternalUserPresentationPage;
