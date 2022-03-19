import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "../../types";
import * as Styled from "./styled";

interface StoperProps {
  seconds: number;
}

export const Stoper: React.FC<StoperProps> = ({ seconds }) => {
  const { t } = useTranslation(TranslationNamespace.Common);

  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const message = currentSeconds > 0 ? `00:${currentSeconds >= 10 ? currentSeconds : `0${currentSeconds}`}` : t("endTimeLabel");

  useEffect(() => {
    const startTimer = () => {
      if (currentSeconds > 0) {
        setCurrentSeconds(prevState => prevState - 1);
      }
    };

    const time = setInterval(startTimer, 1000);

    return () => {
      clearInterval(time);
    };
  }, [currentSeconds]);

  return <Styled.Timer>{message}</Styled.Timer>;
};
