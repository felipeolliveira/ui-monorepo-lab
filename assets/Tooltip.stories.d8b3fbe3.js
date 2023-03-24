var a=Object.defineProperty;var o=(t,s)=>a(t,"name",{value:s,configurable:!0});import{f as e,T as i}from"./index.41f50b07.js";import{j as n,a as l}from"./jsx-runtime.26b51b48.js";import"./index.4cf6b402.js";import"./iframe.28e99f3f.js";import"./index.556830d8.js";const m={parameters:{storySource:{source:`import { Text, Tooltip, TooltipProps } from '@pypees-ui/react'
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
`,locationsMap:{default:{startLoc:{col:46,line:27},endLoc:{col:1,line:48},startBody:{col:46,line:27},endBody:{col:1,line:48}}}}},title:"Typography/Tooltip",decorators:[t=>n("div",{style:{width:"98vw",height:"93vh",display:"flex",justifyContent:"center",alignItems:"center"},children:t()})]},r=o(t=>l(e.Root,{delayDuration:t.delayDuration,skipDelayDuration:t.skipDelayDuration,disableHoverableContent:t.disableHoverableContent,children:[n(e.Trigger,{children:n(i,{css:{color:"white"},children:"Hover me!"})}),n(e.Content,{side:t.side,sideOffset:t.sideOffset,align:t.align,alignOffset:t.alignOffset,css:{backgroundColor:"$gray600"},children:n(i,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."})})]}),"Default");r.args={side:"bottom",sideOffset:8,align:"center",alignOffset:0,disableHoverableContent:!1,delayDuration:300,skipDelayDuration:300};r.argTypes={side:{options:["bottom","left","right","top"],control:"select"},sideOffset:{control:{type:"range",min:0,max:100,step:5}},align:{options:["center","end","start"],control:"select"},alignOffset:{control:{type:"range",min:0,max:50,step:2}},delayDuration:{control:{type:"range",min:0,max:1e3,step:50}},skipDelayDuration:{control:{type:"range",min:0,max:1e3,step:50}}};const u=["Default"];export{r as Default,u as __namedExportsOrder,m as default};
//# sourceMappingURL=Tooltip.stories.d8b3fbe3.js.map
