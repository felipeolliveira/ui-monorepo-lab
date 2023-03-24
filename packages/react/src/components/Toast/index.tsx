import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { ToastClose, ToastRoot, ToastViewport } from './styles'

export interface ToastProviderProps extends RadixToast.ToastProviderProps {}

export interface ToastProps {
  isOpen?: boolean
  title: string
  description: string
  onClose?: () => void
}

export function Toast(props: ToastProps) {
  const { isOpen, description, title, onClose } = props

  return (
    <ToastRoot open={isOpen} onOpenChange={onClose}>
      <RadixToast.Title asChild>
        <Text as="strong" size="xl" css={{ fontWeight: '$bold' }}>
          {title}
        </Text>
      </RadixToast.Title>
      <RadixToast.Description asChild>
        <Text as="span" size="sm" css={{ color: '$gray200' }}>
          {description}
        </Text>
      </RadixToast.Description>
      <RadixToast.Close asChild>
        <ToastClose>
          <X size={20} style={{ flexShrink: 0, outline: 'none' }} />
        </ToastClose>
      </RadixToast.Close>
    </ToastRoot>
  )
}

export function ToastProvider(props: ToastProviderProps) {
  const { children } = props

  return (
    <RadixToast.Provider>
      {children}

      <ToastViewport />
    </RadixToast.Provider>
  )
}
