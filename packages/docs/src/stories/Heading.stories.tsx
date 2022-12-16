import { Heading, HeadingProps } from '@pypees-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: {
        type: 'select'
      }
    }
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  name: 'Custom Heading',
  args: {
    as: 'h1',
    children: 'Heading 1'
  }
}
