import "homeday-blocks/src/styles/main.scss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { HdTooltipInstaller } from "homeday-blocks";

HdTooltipInstaller();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
