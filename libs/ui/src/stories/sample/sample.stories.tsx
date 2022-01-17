import { SampleButton } from '@patronage-web/features-feedback'
import { ComponentMeta } from '@storybook/react'

export const SampleButtonStory = (args: { textColor: string; title: string; variant: string }) => (
  <SampleButton textColor={args.textColor} text={args.title} variant={args.variant} />
)

export default {
  title: 'ButtonSample',
  component: SampleButtonStory,
  args: {
    title: 'Button title',
  },
  argTypes: {
    textColor: { control: 'color', defaultValue: 'blue' },
    variant: {
      defaultValue: 'white',
      description: 'Variant for the button',
      options: ['white', 'black'],
    },
  },
} as ComponentMeta<typeof SampleButtonStory>
