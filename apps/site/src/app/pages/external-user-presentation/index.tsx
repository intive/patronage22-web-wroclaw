import { CurrentQuestionView } from "@patronage-web/features-feedback";
import { ExternalPresentationMock } from "@patronage-web/shared-data";

const ExternalUserPresentationPage: React.FC = () => {
  const { questions } = ExternalPresentationMock;
  const question = questions[0];

  return (
    // TODO - replace when proper data will be delivered
    <>
      <h1>Presentation page for external user</h1>
      <CurrentQuestionView question={question} />
    </>
  );
};

export default ExternalUserPresentationPage;
