import { CircularProgress, Typography } from "@mui/material";
import { formatDuration, intervalToDuration } from "date-fns";
import plLocale from "date-fns/locale/pl";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "../../types";

export interface TimerProps {
  initialTimeMsec: number;
  label: string;
  onTimeElapsed: () => void;
}

export const Timer: React.FC<TimerProps> = ({ initialTimeMsec, label, onTimeElapsed }) => {
  const timeToRefresh = 1000;

  const { t } = useTranslation(TranslationNamespace.Shared);

  const [remainingTime, setRemainingTime] = useState(initialTimeMsec);

  const normalise = (value: number) => {
    const oneHundredPercent = 100;
    return (value * oneHundredPercent) / initialTimeMsec;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(interval);
        onTimeElapsed();
      } else {
        setRemainingTime(remainingTime - timeToRefresh);
      }
    }, timeToRefresh);
    return () => clearInterval(interval);
  });

  return (
    <>
      <CircularProgress variant='determinate' value={normalise(remainingTime)} />
      {remainingTime ? (
        <Typography>
          {label}
          {formatDuration(intervalToDuration({ start: 0, end: remainingTime }), { locale: plLocale })}
        </Typography>
      ) : (
        <Typography>{t("endTimeLabel")}</Typography>
      )}
    </>
  );
};
