import { Box } from "@mui/material";
import { Diagram, DiagramProps, DiagramType } from "@patronage-web/shared";
import { ComponentMeta } from "@storybook/react";

export const DiagramStory: React.FC<DiagramProps> = ({ title, labels, values }) => (
  <Box sx={{ width: "500px", mr: "auto", ml: "auto" }}>
    <Diagram labels={labels} values={values} title={title} type={DiagramType.Bar} />
  </Box>
);

export default {
  title: "Diagram",
  component: DiagramStory,
  argTypes: {
    title: {
      control: { type: "radio" },
      defaultValue: "What animal do you prefer the most?",
      options: ["How many apples?", "What is your favorite character class?"]
    },
    labels: {
      control: { type: "radio" },
      defaultValue: ["Dog", "Cat", "Horse", "Parrot"],
      options: [
        ["One", "Two", "Three", "Four"],
        ["Mage", "Warrior", "Thief", "Elf"]
      ]
    },
    values: {
      control: { type: "radio" },
      defaultValue: [2, 8, 4, 5],
      options: [
        [8, 5, 4, 1],
        [5, 6, 7, 8]
      ]
    }
  }
} as ComponentMeta<typeof DiagramStory>;
