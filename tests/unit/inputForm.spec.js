import inputForm from '@/components/inputForm'
import { mount } from '@vue/test-utils'

describe('inputForm', () => {
  test('emits an event with a user data payload', async () => {
    const wrapper = mount(inputForm)
    await wrapper.find('input').setValue('derprofi')  
    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('submit')[0][0]).toEqual('derprofi')
  })
})