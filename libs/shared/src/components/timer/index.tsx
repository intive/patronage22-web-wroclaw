import { CircularProgress, Typography } from "@mui/material";
import { formatDuration, intervalToDuration } from "date-fns";
import plLocale from "date-fns/locale/pl";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface TimerProps {
  initialTime: number;
  label: string;
  onTimeElapsed: () => void;
}

export const Timer: React.FC<TimerProps> = ({ initialTime, label, onTimeElapsed }) => {
  const { t } = useTranslation();

  const [remainingTime, setRemainingTime] = useState(initialTime);

  const normalise = (value: number) => (value * 100) / initialTime;

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(interval);
        onTimeElapsed();
      } else {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <CircularProgress variant='determinate' value={normalise(remainingTime)} />
      {remainingTime ? (
        <Typography>
          {label}
          {formatDuration(intervalToDuration({ start: 0, end: remainingTime * 1000 }), { locale: plLocale })}
        </Typography>
      ) : (
        <Typography>{t("timesUp")}</Typography>
      )}
    </>
  );
};
