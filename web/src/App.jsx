import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Chat from './components/Chat';
import './styles/App.css';

function App() {
  return (
    <div className="App flex flex-col min-h-screen space-between">
      <Header />
      <Chat/>
      <Footer />
    </div>
  );
}

export default App;
