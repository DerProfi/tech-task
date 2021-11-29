import form from "@/views/Form.vue";
import { mount } from "@vue/test-utils";

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
    await wrapper.vm.search("derprofi");
    expect($router).toHaveLength(1);
  });
});
