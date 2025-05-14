import React from 'react';
import '../../../styles/App.css';
import './style.css';

function Footer() {
  return (
    <footer className="App-footer-custom">
      <div className="container flex justify-between items-center py-20">
        <div className="footer-left">
          <a href="https://github.com/danielabdam/chatgpt-clone" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-15" />
          </a>
        </div>
        <div className="footer-center">
          <span>© 2025 <a href="https://github.com" target="_blank" rel="noopener noreferrer">ORION</a>. Todos os direitos reservados.</span>
        </div>
        <div className="footer-right">
          <strong>Desenvolvedores</strong>
          <ul>
            <li><a href="https://github.com/danielabdam" target="_blank" rel="noopener noreferrer">Daniel Abdam</a></li>
            <li><a href="https://github.com/ambizito" target="_blank" rel="noopener noreferrer">Andre Azevedo</a></li>
            <li><a href="https://github.com/emersonart" target="_blank" rel="noopener noreferrer">Emerson Dantas</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
