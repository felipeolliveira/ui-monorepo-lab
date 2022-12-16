import { Text, TextProps } from '@pypees-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, veniam voluptatem laudantium, numquam optio similique enim magni perferendis minima sapiente quae iste aliquam? Quos dolorem necessitatibus ut fugit nesciunt amet.'
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text'
  }
}
