import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "../../types";
import * as Styled from "./styled";

export const STOPER_CONFIG = {
  refreshTime: 1000
};

interface TimerProps {
  timeToElapse: number;
  onTimeElapsed: () => void;
}

/**
 * Generates a timer
 * @param {number} timeToElapse - it should be provided in seconds
 */
export const Timer: React.FC<TimerProps> = ({ timeToElapse, onTimeElapsed }) => {
  const [currentSeconds, setCurrentSeconds] = useState(timeToElapse);
  const { t } = useTranslation(TranslationNamespace.Common);

  const currentSecondsString = currentSeconds.toFixed().padStart(2, "0");

  const message = currentSeconds > 0 ? `00:${currentSecondsString}` : t("timeIsUp");

  useEffect(() => {
    const timeStart = () => {
      if (currentSeconds) {
        setCurrentSeconds(prevState => prevState - 1);
      }
    };

    const time = setInterval(timeStart, STOPER_CONFIG.refreshTime);

    if (!currentSeconds) {
      onTimeElapsed();
    }

    return () => {
      clearInterval(time);
    };
  }, [currentSeconds, onTimeElapsed]);

  return <Styled.Timer>{message}</Styled.Timer>;
};
