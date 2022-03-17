import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { STOPER_CONFIG } from "../../constants";
import * as Styled from "./styled";

interface StoperProps {
  seconds: number;
}

export const Stoper: React.FC<StoperProps> = ({ seconds }) => {
  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const { t } = useTranslation();
  const message =
    currentSeconds > 0 ? `00:${currentSeconds >= STOPER_CONFIG.addZero ? currentSeconds : `0${currentSeconds}`}` : t("timeIsUp");

  useEffect(() => {
    const startTimer = () => {
      if (currentSeconds > 0) {
        setCurrentSeconds(prevState => prevState - 1);
      }
    };

    const time = setInterval(startTimer, STOPER_CONFIG.second);

    return () => {
      clearInterval(time);
    };
  }, [currentSeconds]);

  return <Styled.Timer>{message}</Styled.Timer>;
};
