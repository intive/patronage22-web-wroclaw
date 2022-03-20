import { DeleteOutlined, Share } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ButtonType, FormFieldType, TranslationNamespace } from "@patronage-web/shared";
import { useTranslation } from "react-i18next";
import { number, string } from "yup";

import * as Styled from "./styled";

export const BasicPresentationInfo: React.FC = () => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  // TODO - replace with proper share action when ready
  const handleShare = () => {
    console.log("share");
  };

  // TODO - replace with proper save action when ready
  const handleSave = () => {
    console.log("save");
  };

  // TODO - replace with proper delete action when ready
  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Box>
      <Styled.TitleAndButtons
        fieldset={[
          {
            type: FormFieldType.Text,
            name: "title",
            variant: "standard",
            inputConfig: {
              defaultValue: t("newPresentation")
            }
          }
        ]}
        validationSchema={{
          title: string().trim().required(t("missingTitleError")).default(t("newPresentation"))
        }}
        customButtons={[
          {
            type: ButtonType.Icon,
            children: <Share />,
            onClick: handleShare
          },
          {
            type: ButtonType.Basic,
            variant: "outlined",
            children: t("save"),
            onClick: handleSave
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
        onSubmit={data => console.log(data)}
        onError={errors => console.log(errors)}
        fieldset={[
          {
            type: FormFieldType.Text,
            name: "description",
            variant: "standard",
            label: t("description"),
            inputConfig: {
              defaultValue: ""
            }
          },
          {
            type: FormFieldType.Text,
            name: "time",
            variant: "standard",
            label: t("setQuestionTime"),
            inputConfig: {
              type: "number",
              defaultValue: 15
            }
          }
        ]}
        validationSchema={{
          description: string(),
          time: number().default(15)
        }}
      />
    </Box>
  );
};
