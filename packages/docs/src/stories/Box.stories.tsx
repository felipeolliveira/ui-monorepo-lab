import { Box, BoxProps, Text } from '@pypees-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing box element</Text>
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
