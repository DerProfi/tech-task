import inputForm from "../components/inputForm.vue";

export default {
  title: "Pages/Input",
  component: inputForm,
  argTypes: {
    onSubmit: {
      action: "submit",
    },
  },
};

const Template = (argTypes) => ({
  props: Object.keys(argTypes),
  components: { inputForm },
  template: `<inputForm @submit="submit"/>`,
});

export const Default = Template.bind({});
