import { BaseButton, ButtonType, createPath, FeedbackRoute, TranslationNamespace } from "@patronage-web/shared";
import { Presentation, useAddPresentationMutation } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export interface SavePresentationButtonProps {
  presentation: Presentation;
  disabled?: boolean;
}

export const SavePresentationButton: React.FC<SavePresentationButtonProps> = ({ presentation, disabled }) => {
  const { i18n, t } = useTranslation(TranslationNamespace.Common);
  const [addPresentation] = useAddPresentationMutation();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await addPresentation(presentation).unwrap();
      navigate(createPath({ route: FeedbackRoute.Dashboard, language: i18n.language }));
      // TODO add success notification when useNotification hook will be applied
    } catch (error) {
      // TODO add fail notification when useNotification hook will be applied
    }
  };

  return (
    <BaseButton variant='outlined' disabled={disabled} onClick={handleClick} type={ButtonType.Basic}>
      {t("save")}
    </BaseButton>
  );
};
