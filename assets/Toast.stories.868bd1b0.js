var s=Object.defineProperty;var n=(t,o)=>s(t,"name",{value:o,configurable:!0});import{d as l,a as p,e as u}from"./index.41f50b07.js";import{r as d}from"./index.4cf6b402.js";import{a as c,j as i}from"./jsx-runtime.26b51b48.js";import"./index.556830d8.js";import"./iframe.28e99f3f.js";const D={parameters:{storySource:{source:`import {
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
`,locationsMap:{default:{startLoc:{col:46,line:17},endLoc:{col:1,line:38},startBody:{col:46,line:17},endBody:{col:1,line:38}}}}},title:"Notification/Toast"},r=n(t=>{const[o,e]=d.exports.useState();function a(){e(void 0),setTimeout(()=>e(Date.now()),100)}return n(a,"handleToast"),c(l,{duration:t.duration,children:[i(p,{variant:"primary",onClick:a,children:"Show toast"}),i(u,{isOpen:!!o,title:t.title||"Title",description:t.description||"Description",onClose:()=>e(void 0)})]})},"Default");r.args={title:"Title",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus vel earum iusto mollitia molestiae?",duration:5e3};r.argTypes={duration:{control:{type:"range",min:500,max:1e4,step:500}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,D as default};
//# sourceMappingURL=Toast.stories.868bd1b0.js.map
