import { Text, Tooltip, TooltipProps } from '@pypees-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Tooltip',
  decorators: [
    (Story) => (
      <div
        style={{
          width: '98vw',
          height: '93vh',
          display: 'grid',
          alignContent: 'center'
        }}
      >
        {Story()}
      </div>
    )
  ]
} as Meta<TooltipProps>

export const Default: StoryFn<TooltipProps> = ({ Content, Root, Trigger }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Text>Hover me!</Text>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
