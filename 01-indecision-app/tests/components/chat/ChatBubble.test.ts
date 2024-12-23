import { mount } from '@vue/test-utils';
import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('<ChatBubble>', () => {
  it('should render own message correctly', () => {
    const message = 'Hello';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  it('should received message correctly', () => {
    const message = 'Hello';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBe(false);
  });

  it('should received message correctly with image', () => {
    const message = 'Hello';
    const imageURL = 'https://example.com/image.jpg';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image: imageURL },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').attributes('src')).toBe(imageURL);
  });
});
