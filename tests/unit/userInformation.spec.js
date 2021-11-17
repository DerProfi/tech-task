import userInformation from "@/components/userInformation";
import { mount } from "@vue/test-utils";

describe(
  "userInformation",
  () => {
    test("if data is not there, nothing should be displayed", () => {
      const wrapper = mount(userInformation, {
        propsData: {
          userData: {},
        },
      });
      expect(wrapper.find("container-content").exists()).toBeFalsy();
    });
  },

  describe("userInformation", () => {
    test("everything is displayed correctly", () => {
      const wrapper = mount(userInformation, {
        propsData: {
          username: "derprofi",
          userData: {
            avatar_url: "https://avatars.githubusercontent.com/u/43568019?v=4",
            name: "Leon Nothegger",
            company: null,
            location: "Berlin",
            bio: "Hi, I'm Leon, junior frontend developer. 📚 ",
          },
        },
      });
      expect(wrapper.find('[data-testid="informationHeading"]').text()).toEqual(
        "Information about derprofi"
      );
    });
  })
);
