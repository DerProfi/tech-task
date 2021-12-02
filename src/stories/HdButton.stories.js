import { HdButton } from "homeday-blocks";

export default {
  title: "Components/Button",
  component: HdButton,
  argTypes: {
    onClick: {
      action: "onCLick",
    },
  },
};

const Template = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { HdButton },
  template: `<HdButton @click="onClick">Press</HdButton>`,
});

export const Default = Template.bind({});
