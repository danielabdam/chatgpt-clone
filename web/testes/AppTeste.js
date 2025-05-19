import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('deve renderizar o título principal', () => {
    render(<App />);
    // Ajuste o texto conforme o que aparece na sua tela principal
    expect(screen.getByText(/como posso ajudar/i)).toBeInTheDocument();
  });
});
