import { Heading, HeadingProps } from '@pypees-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, veniam voluptatem laudantium, numquam optio similique enim magni perferendis minima sapiente quae iste aliquam? Quos dolorem necessitatibus ut fugit nesciunt amet.'
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
