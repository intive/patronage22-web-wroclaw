import {
  BaseButton,
  ButtonType,
  createPath,
  FeedbackRoute,
  FormFieldType,
  FormProps,
  TranslationNamespace
} from "@patronage-web/shared";
import { Presentation, useAddPresentationMutation } from "@patronage-web/shared-data";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { string } from "yup";

import { BasicPresentationInfo, QuestionCard, ShareDialog } from "../../components";
import { QUESTION_CONFIG } from "../../configs";
import * as Styled from "./styled";
import { updateTranslations } from "./update-translations";

// TODO - replace with import from shared/data/feedback/types when
// "P2022-413 Praticipate in presentation" is ready
export enum QuestionType {
  Open = "open",
  Closed = "closed"
}

export const NewPresentationView: React.FC = () => {
  const { i18n, t } = useTranslation(TranslationNamespace.Feedback);
  const navigate = useNavigate();
  const [fetchAddPresentation] = useAddPresentationMutation();
  const [openDialog, setOpenDialog] = useState(false);

  const QuestionTypeOptions = [
    { [t("question.questionTypeOpen")]: QuestionType.Open },
    { [t("question.questionTypeClosed")]: QuestionType.Closed }
  ];

  const defaultQuestion: FormProps = {
    id: uuidv4(),
    initialValues: { question: "", questionType: QuestionType.Closed },
    fields: [
      {
        type: FormFieldType.Select,
        name: "questionType",
        label: t("question.questionType"),
        values: QuestionTypeOptions
      },
      {
        type: FormFieldType.Text,
        name: "question",
        description: t("question.questionField"),
        variant: "filled",
        inputConfig: {
          disableUnderline: true
        },
        dynamics: {
          name: "questions",
          addButtonText: "",
          fields: [],
          maxAmount: 0
        }
      }
    ],
    validationSchema: {
      question: string()
        .trim()
        .required(t("question.missingQuestionError"))
        .max(QUESTION_CONFIG.maxLength, t("question.maxCharLength", { charAmount: QUESTION_CONFIG.maxLength }))
        .ensure()
    }
  };

  const [questions, setQuestions] = useState([defaultQuestion]);
  const [isQuestionAsked, setIsQuestionAsked] = useState([false]);
  const [isQuestionListFull, setIsQuestionListFull] = useState(false);
  const isLastQuestionAsked = isQuestionAsked[isQuestionAsked.length - 1];

  i18n.on("languageChanged", () => updateTranslations(setQuestions, isQuestionAsked));

  const handleNewQuestion = () => {
    if (questions.length < QUESTION_CONFIG.maxAmountOfQuestions) {
      setQuestions(prevQuestions => [...prevQuestions, { ...defaultQuestion, id: uuidv4() }]);
      setIsQuestionAsked(prevValues => [...prevValues, false]);
    }
    if (questions.length + 1 === QUESTION_CONFIG.maxAmountOfQuestions) {
      setIsQuestionListFull(true);
    }
  };

  const handleSave = async () => {
    // TODO remove line below when component will provide proper presentation according to Presentation interface
    const presentation = {} as Presentation;
    try {
      await fetchAddPresentation(presentation);
      navigate(createPath({ route: FeedbackRoute.Dashboard, language: i18n.language }));
      // TODO add success notification when useNotification hook will be applied
    } catch (error) {
      // TODO add fail notification when useNotification hook will be applied
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Styled.NewPresentationWrapper>
      {/* TODO - replace id and title with a proper values when will be ready */}
      <ShareDialog onClose={handleCloseDialog} open={openDialog} id='sample-id' title='sample-title' />
      <BasicPresentationInfo onSave={handleSave} onShare={handleOpenDialog} />
      {questions.map((questionForm, questionFormIndex) => (
        <QuestionCard
          key={`question-card-${questionForm.id}`}
          questionForm={questionForm}
          questionFormIndex={questionFormIndex}
          questions={questions}
          setQuestions={setQuestions}
          isQuestionAsked={isQuestionAsked}
          setIsQuestionAsked={setIsQuestionAsked}
          setIsQuestionListFull={setIsQuestionListFull}
        />
      ))}
      <Styled.NewQuestionBtnWrapper>
        <BaseButton
          key='add-question-btn'
          type={ButtonType.Basic}
          variant='contained'
          onClick={handleNewQuestion}
          disabled={(isQuestionListFull || !isLastQuestionAsked) && questions.length > 0}
        >
          {t("newQuestion")}
        </BaseButton>
      </Styled.NewQuestionBtnWrapper>
    </Styled.NewPresentationWrapper>
  );
};
