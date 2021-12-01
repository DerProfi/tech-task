// import MyButton from './Button.vue';
import inputForm from "../components/inputForm.vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "Example/Input",
  component: inputForm,
  argTypes: {
    emitEvent: { action: "submit" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  components: { inputForm },
  setup() {
    return { args };
  },
  template: '<div><inputForm v-bind="{...args}"></inputForm></div>',
});

export const Primary = Template.bind({});
