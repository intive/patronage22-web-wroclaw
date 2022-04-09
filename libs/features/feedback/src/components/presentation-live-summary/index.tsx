import { Diagram, DiagramType, TranslationNamespace } from "@patronage-web/shared";
import { FeedbackQuestionAnswers } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface PresentationLiveSummaryProps {
  questions: FeedbackQuestionAnswers[];
}

interface PresentationResultsData {
  labels: string[];
  values: number[];
}

export const PresentationLiveSummary: React.FC<PresentationLiveSummaryProps> = ({ questions }) => {
  const { t } = useTranslation(TranslationNamespace.Feedback);

  /* eslint-disable react/destructuring-assignment */
  const results = questions.map(({ title: diagramTitle, answers, id }) => {
    const diagramValues = answers.reduce<PresentationResultsData>(
      (acc, item) => {
        acc.labels.push(item.title);
        acc.values.push(item.count);

        return acc;
      },
      { labels: [], values: [] }
    );

    return (
      <Styled.DiagramContainer key={id}>
        <Diagram title={diagramTitle} type={DiagramType.Bar} {...diagramValues} />
      </Styled.DiagramContainer>
    );
  });

  return (
    <Styled.PresentationSummaryContainer>
      <Styled.LiveSummaryTitle variant='h6'>{t("presentationSummary")}</Styled.LiveSummaryTitle>
      {results}
    </Styled.PresentationSummaryContainer>
  );
};
