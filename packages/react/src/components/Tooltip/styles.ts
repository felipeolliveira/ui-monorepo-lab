import { styled } from '../../styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const TooltipTrigger = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0
})

export const TooltipContainer = styled(RadixTooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$white'
})

export const TooltipArrow = styled(RadixTooltip.Arrow, {
  width: 16,
  height: 8,
  fill: '$gray900'
})
