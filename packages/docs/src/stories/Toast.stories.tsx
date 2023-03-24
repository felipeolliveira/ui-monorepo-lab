import { Button, Toast, ToastProps, ToastProvider } from '@pypees-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Notification/Toast',
  component: Toast,
  args: {
    title: 'Title',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus vel earum iusto mollitia molestiae?'
  }
} as Meta<ToastProps>

export const Default: StoryFn<ToastProps> = (props) => {
  const [fireToast, setFireToast] = useState<number | undefined>()

  function handleToast() {
    setFireToast(undefined)
    setTimeout(() => setFireToast(Date.now()), 100)
  }

  return (
    <ToastProvider swipeDirection="left">
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
