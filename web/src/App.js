import React, { useState } from 'react';
import './styles/main.css';
import logo from './iconnew.svg';
import './styles/App.css';
import Chat from './components/chat/Chat'; // ✅ com "c" minúsculo



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="page-title">Projeto Integração de IA</div>
        <p>
        </p>
        <Chat />
      </header>
      <footer className="App-footer-custom">
        <div className="container-footer">
          <div className="footer-left">
            <a href="https://github.com/danielabdam/chatgpt-clone" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="github-icon" />
            </a>
          </div>
          <div className="footer-center">
            <span>© 2025 <a href="https://github.com" target="_blank" rel="noopener noreferrer">DA & AA</a>. Todos os direitos reservados.</span>
          </div>
          <div className="footer-right">
            <strong>Colaboradores</strong>
            <ul>
              <li><a href="https://github.com/danielabdam" target="_blank" rel="noopener noreferrer">Daniel Abdam</a></li>
              <li><a href="https://github.com/ambizito" target="_blank" rel="noopener noreferrer">Andre Azevedo</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
