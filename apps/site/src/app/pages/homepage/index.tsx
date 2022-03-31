import { HomeView as HomeFeedbackView } from "@patronage-web/features-feedback";
import { LogoutButton } from "@patronage-web/shared";

const Homepage: React.FC = () => {
  return (
    <>
      <LogoutButton />
      <HomeFeedbackView />
    </>
  );
};

export default Homepage;
