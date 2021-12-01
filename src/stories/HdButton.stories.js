// import MyButton from './Button.vue';
import { HdButton } from "homeday-blocks";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "Example/Button",
  component: HdButton,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = () => ({
  components: { HdButton },
  template: "<HdButton>Hello world</HdButton>",
});

export const Primary = Template.bind({});
