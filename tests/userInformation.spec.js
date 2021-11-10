import userInformation from '@/components/userInformation'
import { mount } from '@vue/test-utils'

describe(('userInformation'), () => {
  test('everything is displayed correctly'), async () => {
    const wrapper = mount(userInformation, {
      data() {
        return {
            username: "derprofi",
            avatar_url: "https://avatars.githubusercontent.com/u/43568019?v=4",
            name: "Leon Nothegger",
            company: null,
            location: "Berlin",
            bio: "Hi, I'm Leon, junior frontend developer. 📚 ",
        }
      }
    })
    expect(wrapper.find('h1').text()).toEqual('Information about Leon Nothegger')
    }
})