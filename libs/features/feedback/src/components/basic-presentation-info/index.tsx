import { DeleteOutlined, Share } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ButtonType, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { number, string } from "yup";

import { QUESTION_CONFIG } from "../../configs";
import * as Styled from "./styled";

export interface BasicPresentationInfoProps {
  onSave: () => void;
  onShare: () => void;
}

export const BasicPresentationInfo: React.FC<BasicPresentationInfoProps> = ({ onSave, onShare }) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  // TODO - replace with proper delete action when ready
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Box>
      <Styled.TitleAndButtons
        fields={[
          {
            type: FormFieldType.Text,
            name: "title",
            variant: "standard",
            placeholder: t("newPresentation")
          }
        ]}
        validationSchema={{
          title: string().trim().required(t("missingTitleError")).default(t("newPresentation"))
        }}
        customButtons={[
          {
            type: ButtonType.Icon,
            children: <Share />,
            onClick: onShare
          },
          {
            type: ButtonType.Basic,
            variant: "outlined",
            children: t("save"),
            onClick: onSave
          },
          {
            type: ButtonType.Basic,
            variant: "outlined",
            children: <DeleteOutlined />,
            onClick: handleDelete
          }
        ]}
      />
      <Styled.BasicPresentationInfo
        fields={[
          {
            type: FormFieldType.Textarea,
            name: "description",
            variant: "standard",
            placeholder: t("description"),
            rows: 2,
            inputConfig: { disableUnderline: true }
          },
          {
            type: FormFieldType.Text,
            name: "time",
            variant: "standard",
            label: t("setQuestionTime"),
            inputConfig: {
              type: "number",
              defaultValue: QUESTION_CONFIG.defaultTime
            }
          }
        ]}
        validationSchema={{
          description: string(),
          time: number().default(QUESTION_CONFIG.defaultTime)
        }}
      />
    </Box>
  );
};
