import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'grey900',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'grey600',
        value: '#323238',
      },
      {
        name: 'grey900',
        value: '#121214',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark
  }
}