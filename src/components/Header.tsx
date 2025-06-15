import React from 'react';
import reactLogo from '../assets/react.svg';

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-8 py-4 bg-white rounded-b-2xl shadow-lg mb-8 w-full">
    <div className="flex items-center gap-3">
      <img src={reactLogo} alt="Logo" className="w-9 h-9" />
      <span className="font-bold text-2xl tracking-wide">Crypto Dashboard</span>
    </div>
    <button
      className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-semibold text-base shadow-md hover:from-indigo-600 hover:to-blue-500 transition-colors"
      aria-label="Connect Wallet"
    >
      Connect Wallet
    </button>
  </header>
);

export default Header; 