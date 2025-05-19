import { render, screen } from '@testing-library/react';
import Chat from '../../../src/components/chat/Chat';

describe('Chat', () => {
  it('deve renderizar o componente Chat', () => {
    render(<Chat />);
    // Verifica se o header do chat está presente
    expect(screen.getByText(/como posso ajudar/i)).toBeInTheDocument();
  });
});
