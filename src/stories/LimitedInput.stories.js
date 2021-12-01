import LimitedInput from "../components/LimitedInput.vue";

export default {
  title: "Example/limited",
};

export const Simple = () => ({
  render() {
    return <LimitedInput />;
  },
});

export const SimpleWithTemplate = () => ({
  components: { LimitedInput },
  template: "<LimitedInput/>",
});

export const withValue = () => ({
  render() {
    return <LimitedInput value="test" />;
  },
});
