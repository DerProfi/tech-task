import form from "@/views/Form.vue";
import { mount } from "@vue/test-utils";
import inputForm from "@/components/inputForm";

describe("form ", () => {
  test("error displaying", async () => {
    const wrapper = mount(form);
    const submitButton = wrapper.find("button");
    await submitButton.trigger("submit");
    expect(wrapper.find('[data-testid="errorDisplay"]').text()).toMatch(
      "Please enter a username."
    );
  });

  test("on submit route to results", async () => {
    const $router = [];
    const wrapper = mount(form, {
      mocks: {
        $router,
      },
    });
    await wrapper.findComponent(inputForm).trigger("submit");
    expect($router).toHaveLength(0);
  });
});
