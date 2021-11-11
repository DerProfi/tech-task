import form from '@/views/Form.vue'
import { mount, shallowMount } from '@vue/test-utils'
import inputForm from '@/components/inputForm'


describe('form ', () => {
  test('error displaying', () => {
    const wrapper = mount(form, {
      data(){
        return {
          username: {},
          errors: ["Please enter a username."]
        }
      }
    })
  expect(wrapper.find('p').text()).toMatch('Please enter a username.')
  })
})

describe('form ', () => {
  
  const $router = {
    name: "Results"
  }

  test('on submit route to results', async ()   => {
    const wrapper = shallowMount(form, {
      data(){
        return {
          username: "derprofi",
          errors: []
        }
      },
      mocks: {
        $router
      }
    })
    await wrapper.findComponent(inputForm).trigger('submit')
    expect(wrapper.vm.$router.name).toBe($router.name)
  })
})