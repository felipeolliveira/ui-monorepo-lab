import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContainer, TooltipTrigger } from './styles'

interface TooltipRootProps {
  children: React.ReactNode
  delayDuration?: number
  skipDelayDuration?: number
  disableHoverableContent?: boolean
  isOpen?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

interface TooltipTriggerProps extends RadixTooltip.TooltipTriggerProps {
  children: React.ReactNode
}

interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipContainer> {
  portal?: RadixTooltip.TooltipPortalProps
  arrow?: React.ComponentProps<typeof TooltipArrow>
  children: React.ReactNode
}

function Root(props: TooltipRootProps) {
  const { children, skipDelayDuration, delayDuration = 300, ...root } = props

  return (
    <RadixTooltip.Provider skipDelayDuration={skipDelayDuration}>
      <RadixTooltip.Root delayDuration={delayDuration} {...root}>
        {children}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

function Trigger(props: TooltipTriggerProps) {
  const { children, ...trigger } = props

  return (
    <RadixTooltip.Trigger {...trigger} asChild>
      <TooltipTrigger>{children}</TooltipTrigger>
    </RadixTooltip.Trigger>
  )
}

function Content(props: TooltipContentProps) {
  const { children, portal, arrow, ...content } = props

  return (
    <RadixTooltip.Portal {...portal}>
      <TooltipContainer {...content}>
        {children}
        <TooltipArrow
          {...arrow}
          css={{ fill: content.css?.backgroundColor, ...arrow?.css }}
        />
      </TooltipContainer>
    </RadixTooltip.Portal>
  )
}

export const Tooltip = {
  Root,
  Trigger,
  Content
}

export type TooltipProps = {
  Root: TooltipRootProps
  Trigger: TooltipTriggerProps
  Content: TooltipContentProps
}
