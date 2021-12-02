import inputForm from "../components/inputForm.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Pages/Input",
  component: inputForm,
};

const Template = () => ({
  components: { inputForm },
  setup() {
    return {};
  },
  template: "<div><inputForm></inputForm></div>",
});

export const StoryForAction = () => ({
  render() {
    return <inputForm onSubmit={action("submit")} />;
  },
});

export const Default = Template.bind({});
