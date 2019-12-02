import React, { useState } from 'react';
import './styles/App.scss';

import Routes from './routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [ GDIMPoff, handleGDIMPoff ] = useState(false);

  const handleGDIMPTheme = () => {
    handleGDIMPoff(!GDIMPoff);
    document.body.className = GDIMPoff ? 'normal': 'gdimp';
    window._theme = GDIMPoff ? 'normal': 'gdimp';
  }

  return (
    <div className="App">
      <Header
        GDIMPoff={GDIMPoff}
      />
      <Routes
        GDIMPoff={GDIMPoff}
      />
      <Footer
        handleGDIMPTheme={handleGDIMPTheme}
        GDIMPoff={GDIMPoff}
      />
    </div> 

  );
}

export default App;
