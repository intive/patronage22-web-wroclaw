import { DeleteOutlined, Share } from "@mui/icons-material";
import { BaseButton, ButtonType, createPath, FeedbackRoute, TranslationNamespace, useNotification } from "@patronage-web/shared";
import { Presentation, useAddPresentationMutation } from "@patronage-web/shared-data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { BasicPresentationInfo, PresentationTitleForm, QuestionCard, ShareDialog } from "../../components";
import { QUESTION_CONFIG } from "../../configs";
import * as Styled from "./styled";

export interface QuestionData {
  id: string;
}

export const NewPresentationView: React.FC = () => {
  const { i18n, t } = useTranslation(TranslationNamespace.Feedback);
  const navigate = useNavigate();
  const [fetchAddPresentation] = useAddPresentationMutation();
  const { showSuccess, showError } = useNotification();
  const [openDialog, setOpenDialog] = useState(false);

  const questionData: QuestionData = {
    id: uuidv4()
  };

  const [questions, setQuestions] = useState([questionData]);
  const [isQuestionListFull, setIsQuestionListFull] = useState(false);

  const handleNewQuestion = () => {
    if (questions.length < QUESTION_CONFIG.maxAmountOfQuestions) {
      setQuestions(prevQuestions => [...prevQuestions, { id: uuidv4() }]);
    }
    if (questions.length + 1 === QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(true);
    }
  };

  const handleSave = async () => {
    try {
      // TODO replace empty presentation when component will provide proper presentation according to Presentation interface
      await fetchAddPresentation({} as Presentation);
      // TODO replace when redux router will be provided
      navigate(createPath({ route: FeedbackRoute.Dashboard, language: i18n.language }));
      showSuccess(t("presentation.saveSuccess"));
    } catch {
      showError(t("presentation.saveFail"));
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <Styled.NewPresentationWrapper>
      {/* TODO - replace id and title with a proper values when will be ready */}
      <ShareDialog onClose={handleCloseDialog} open={openDialog} id='mocked-presentation-id' title='mocked-presentation-title' />
      <Styled.TitleAndButtonsWrapper>
        <PresentationTitleForm />
        <Styled.ButtonsWrapper>
          <BaseButton type={ButtonType.Icon} onClick={handleOpenDialog}>
            <Share />
          </BaseButton>
          <BaseButton type={ButtonType.Basic} onClick={handleSave} variant='outlined' sx={{ margin: "0 8px" }}>
            {t("save")}
          </BaseButton>
          <BaseButton type={ButtonType.Icon} onClick={handleDelete}>
            <DeleteOutlined />
          </BaseButton>
        </Styled.ButtonsWrapper>
      </Styled.TitleAndButtonsWrapper>
      <BasicPresentationInfo />
      {questions.map((questionForm, questionFormIndex) => (
        <QuestionCard
          key={`question-card-${questionForm.id}`}
          id={questionForm.id}
          updateQuestionList={setQuestions}
          instance={questionFormIndex}
        />
      ))}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton
          key='add-question-btn'
          type={ButtonType.Basic}
          variant='contained'
          onClick={handleNewQuestion}
          disabled={isQuestionListFull && questions.length > 0}
        >
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
