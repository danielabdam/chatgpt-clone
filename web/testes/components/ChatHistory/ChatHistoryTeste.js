import { render, screen } from '@testing-library/react';
import ChatHistory from '../../../src/components/ChatHistory/ChatHistory';

describe('ChatHistory', () => {
  it('deve renderizar o componente ChatHistory', () => {
    render(<ChatHistory />);
    // Garante que o botão existe
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
