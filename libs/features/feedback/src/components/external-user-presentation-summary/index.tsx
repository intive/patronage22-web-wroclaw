import { Typography } from "@mui/material";
import { Diagram, DiagramType, TranslationNamespace } from "@patronage-web/shared";
import { Question } from "@patronage-web/shared-data";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export interface ExtPresentationSummaryProps {
  questions: Question[];
}

interface ResultsData {
  labels: string[];
  values: number[];
}

export const ExternalUserPresentationSummary: React.FC<ExtPresentationSummaryProps> = ({ questions }) => {
  const { t } = useTranslation([TranslationNamespace.Feedback, TranslationNamespace.Common]);
  /* eslint-disable react/destructuring-assignment */
  const results = questions.map(({ content, answers }) => {
    const { labels, values } = answers.reduce<ResultsData>(
      (acc, item) => {
        acc.labels.push(item.content);
        acc.values.push(item.count);

        return acc;
      },
      { labels: [], values: [] }
    );

    return <Diagram title={content} type={DiagramType.Bar} labels={labels} values={values} />;
  });

  return (
    <Styled.PresentationSummaryContainer>
      <Typography>{t("presentationSummary")}</Typography>
      {results}
    </Styled.PresentationSummaryContainer>
  );
};
