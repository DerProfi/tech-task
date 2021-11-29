import userInformation from "@/components/userInformation";
import { mount } from "@vue/test-utils";

describe("userInformation", () => {
  test("if data is not there, nothing should be displayed", () => {
    const wrapper = mount(userInformation, {
      propsData: {
        userData: {},
      },
    });
    expect(wrapper.find("container-content").exists()).toBeFalsy();
  });
});
