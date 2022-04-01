import { Timer, TimerProps } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const TimerStory: React.FC<TimerProps> = ({ timeToElapse }) => (
  <Timer timeToElapse={timeToElapse} onTimeElapsed={() => console.log("end")} />
);

export default {
  title: "Timer",
  component: TimerStory,
  argTypes: {
    timeToElapse: {
      control: { type: "radio" },
      defaultValue: 5,
      options: [10, 15]
    }
  }
} as ComponentMeta<typeof TimerStory>;
