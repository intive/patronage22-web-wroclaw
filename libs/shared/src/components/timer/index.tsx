import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

export interface TimerProps {
  startRemainingTime: number;
  label: string;
  onTimeElapsed: () => void;
}

export const Timer: React.FC<TimerProps> = ({ startRemainingTime, label, onTimeElapsed }) => {
  const [remainingTime, setRemainingTime] = useState<number>(startRemainingTime);

  // I wish to replace that with moment.js duration and it's humanize function
  const convertToHumanReadableString = (seconds: number) => {
    const formatSegment = (segment: number, sufix: string) => (segment > 0 ? `${segment} ${sufix} ` : "");
    const numYears = Math.floor(seconds / 31536000);
    const numDays = Math.floor((seconds % 31536000) / 86400);
    const numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    const numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    const numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;

    return `${formatSegment(numYears, "y")} 
    ${formatSegment(numDays, "d")} 
    ${formatSegment(numHours, "h")} 
    ${formatSegment(numMinutes, "m")} 
    ${numSeconds} s`;
  };

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
    <Stack direction='row'>
      {label}
      {convertToHumanReadableString(remainingTime)}
    </Stack>
  );
};
