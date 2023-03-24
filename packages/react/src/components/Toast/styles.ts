import * as RadixToast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const animations = {
  hide: keyframes({
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    }
  }),
  slideIn: keyframes({
    from: {
      transform: 'translateX(calc(100% + var(--space-4)))'
    },
    to: {
      transform: 'translateX(0)'
    }
  }),
  swipeOut: keyframes({
    from: {
      transform: 'translateX(var(--radix-toast-swipe-end-x))'
    },
    to: {
      transform: 'translateX(calc(100%))'
    }
  })
}

export const ToastViewport = styled(RadixToast.Viewport, {
  all: 'unset',
  position: 'fixed',
  padding: '$4',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none'
})

export const ToastRoot = styled(RadixToast.Root, {
  backgroundColor: '$gray600',
  borderRadius: '$md',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  position: 'relative',
  outline: 'none',

  '&:focus-visible': {
    boxShadow: '0 0 0 2px $colors$ignite300'
  },

  '&[data-state=open]': {
    animation: `${animations.slideIn} 750ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&[data-state=closed]': {
    animation: `${animations.hide} 100ms ease-in`
  },
  '&[data-swipe=move]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))'
  },
  '&[data-swipe=cancel]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out'
  },
  '&[data-swipe=end]': {
    animation: `${animations.swipeOut} 100ms ease-out`
  }
})

export const ToastClose = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  color: '$gray200',
  backgroundColor: 'transparent',
  border: 'none',
  width: 'fit-content',
  height: 'fit-content',
  padding: 0,
  cursor: 'pointer',
  borderRadius: '$xs',
  transition: 'all 100ms',
  lineHeight: 0,

  '&:hover': {
    backgroundColor: '$gray700'
  },

  '&:active': {
    backgroundColor: '$gray800'
  },

  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$ignite300'
  }
})
