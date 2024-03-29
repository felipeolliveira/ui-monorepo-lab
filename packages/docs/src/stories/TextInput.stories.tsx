import { Box, Text, TextInput, TextInputProps } from '@pypees-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Is disabled input'
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username'
  }
}
