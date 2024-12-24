import { useChat } from '@/composables/useChat';

describe('useChat tests', () => {
  it('should add message correctly when onMessage is called', async () => {
    const text = 'Hola Mundo';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0]).toEqual({
      id: expect.any(String),
      itsMine: true,
      message: text,
    });
  });

  it('should add nothing if text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  it('should gets her response correctly when message ends with "?"', async () => {
    const text = '¿Quieres café?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, herMessage] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(herMessage).toEqual({
      id: expect.any(String),
      image: expect.any(String),
      message: expect.any(String),
      itsMine: false,
    });

    expect(myMessage).toEqual({
      id: expect.any(String),
      message: expect.any(String),
      itsMine: true,
    });
  });

  it('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = '¿Quieres café?';
    const { messages, onMessage } = useChat();

    await onMessage(text);
    await new Promise((r) => setTimeout(r, 1600));

    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(String),
      image: mockResponse.image,
      message: mockResponse.answer,
      itsMine: false,
    });
  });
});
