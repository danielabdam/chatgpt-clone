import React from 'react';
import logo from '../../../iconnew.svg';

function Header() {
  return (
    <header className="bg-neutral-800 text-white py-4">
      <div className="mx-auto flex items-center justify-between max-w-4/5">
        <div className="text-2xl font-bold">Projeto Integração de IA</div>
        <img src={logo} className="h-12 w-12" alt="logo" />
      </div>
    </header>
  );
}

export default Header;