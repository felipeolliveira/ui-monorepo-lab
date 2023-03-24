import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
  ToastProviderProps
} from '@pypees-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Notification/Toast'
} as Meta<ToastProps>

type DefaultProps = ToastProps & ToastProviderProps

export const Default: StoryFn<DefaultProps> = (props) => {
  const [fireToast, setFireToast] = useState<number | undefined>()

  function handleToast() {
    setFireToast(undefined)
    setTimeout(() => setFireToast(Date.now()), 100)
  }

  return (
    <ToastProvider duration={props.duration}>
      <Button variant="primary" onClick={handleToast}>
        Show toast
      </Button>
      <Toast
        isOpen={!!fireToast}
        title={props.title || 'Title'}
        description={props.description || 'Description'}
        onClose={() => setFireToast(undefined)}
      />
    </ToastProvider>
  )
}

Default.args = {
  title: 'Title',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus vel earum iusto mollitia molestiae?',
  duration: 5000
}
Default.argTypes = {
  duration: {
    control: {
      type: 'range',
      min: 500,
      max: 10000,
      step: 500
    }
  }
}
