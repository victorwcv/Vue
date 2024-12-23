import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('Testing <MessageBox/>', () => {
  it('should render input and button correctly', () => {
    const wrapper = mount(MessageBox);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
