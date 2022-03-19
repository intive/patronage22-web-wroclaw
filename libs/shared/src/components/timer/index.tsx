import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export const STOPER_CONFIG = {
  ten: 10,
  second: 1000
};

interface TimerProps {
  seconds: number;
}

export const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const { t } = useTranslation();

  const second = currentSeconds >= STOPER_CONFIG.ten ? currentSeconds : `0${currentSeconds}`;

  const message = currentSeconds > 0 ? `00:${second}` : t("timeIsUp");

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
