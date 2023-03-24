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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {Story()}
      </div>
    )
  ]
} as Meta<TooltipProps>

type DefaultProps = TooltipProps['Content'] &
  TooltipProps['Root'] &
  TooltipProps['Trigger']

export const Default: StoryFn<DefaultProps> = (props) => {
  return (
    <Tooltip.Root
      delayDuration={props.delayDuration}
      skipDelayDuration={props.skipDelayDuration}
      disableHoverableContent={props.disableHoverableContent}
    >
      <Tooltip.Trigger>
        <Text css={{ color: 'white' }}>Hover me!</Text>
      </Tooltip.Trigger>
      <Tooltip.Content
        side={props.side}
        sideOffset={props.sideOffset}
        align={props.align}
        alignOffset={props.alignOffset}
        css={{ backgroundColor: '$gray600' }}
      >
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

Default.args = {
  side: 'bottom',
  sideOffset: 8,
  align: 'center',
  alignOffset: 0,
  disableHoverableContent: false,
  delayDuration: 300,
  skipDelayDuration: 300
}

Default.argTypes = {
  side: {
    options: [
      'bottom',
      'left',
      'right',
      'top'
    ] as TooltipProps['Content']['side'][],
    control: 'select'
  },
  sideOffset: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  align: {
    options: ['center', 'end', 'start'] as TooltipProps['Content']['align'][],
    control: 'select'
  },
  alignOffset: {
    control: { type: 'range', min: 0, max: 50, step: 2 }
  },
  delayDuration: {
    control: { type: 'range', min: 0, max: 1000, step: 50 }
  },
  skipDelayDuration: {
    control: { type: 'range', min: 0, max: 1000, step: 50 }
  }
}
