import { themes } from "@storybook/theming";
import "!style-loader!css-loader!sass-loader!../src/styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "#fff" },
  },

  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#27293D",
      },
    ],
  },
};
