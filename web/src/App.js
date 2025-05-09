import React, { useState } from 'react';
import logo from './chatgpt-6.svg';
import './styles/App.css';

function App() {
  const [question, setQuestion] = useState('');

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Pergunta enviada: ${question}`);
    // Aqui você pode adicionar a lógica para processar a pergunta
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Projeto de clone do ChatGPT</code>
        </p>
        <div className="question-box">
          <input
            type="text"
            placeholder="Digite sua pergunta aqui..."
            value={question}
            onChange={handleInputChange}
            className="question-input"
          />
          <button onClick={handleSubmit} className="submit-button">
            Enviar
          </button>
        </div>
        <a
          className="App-link"
          href="https://github.com/danielabdam/chatgpt-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link para o repositório do projeto
        </a>
      </header>
      <footer className="App-footer">
        Criado por Daniel Abdam e Andre Azevdo
        <br />
        <a
          className="App-link"
          href="https://github.com/danielabdam"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub do Daniel Abdam
        </a>
        <br />
        <a
          className="App-link"
          href="https://github.com/ambizito"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub do Andre Azevdo
        </a>
      </footer>
    </div>
  );
}

export default App;
