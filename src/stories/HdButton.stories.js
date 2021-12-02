import { HdButton } from "homeday-blocks";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: HdButton,
};

const Template = () => ({
  components: { HdButton },
  setup() {
    return {};
  },
  template: `<HdButton>Press</HdButton>`,
});

export const HdButtonAction = () => ({
  render() {
    return <HdButton onClick={action("click")}>Press</HdButton>;
  },
});

export const Default = Template.bind({});
