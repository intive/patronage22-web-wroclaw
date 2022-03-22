import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import * as Styled from "./styled";

export const STOPER_CONFIG = {
  refreshTime: 1000
};

interface TimerProps {
  seconds: number;
}

export const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [currentSeconds, setCurrentSeconds] = useState(seconds);
  const { t } = useTranslation();

  const currentSecondsString = currentSeconds.toFixed().padStart(2, "0");

  const message = currentSeconds > 0 ? `00:${currentSecondsString}` : t("timeIsUp");

  useEffect(() => {
    const timeStart = () => {
      if (currentSeconds > 0) {
        setCurrentSeconds(prevState => prevState - 1);
      }
    };

    const time = setInterval(timeStart, STOPER_CONFIG.refreshTime);

    return () => {
      clearInterval(time);
    };
  }, [currentSeconds]);

  return <Styled.Timer>{message}</Styled.Timer>;
};
