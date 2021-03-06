import React, { useEffect, useState } from 'react';
import './styles/index.scss';

import Routes from './routes/Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  const [ GDIMPoff, handleGDIMPoff ] = useState((localStorage.getItem('GDIMPoff') === 'true')|| false);

  useEffect (() => {
    const bg = (localStorage.getItem('GDIMPoff') === 'true') ? 'gdimp': 'normal';
    document.body.className = bg;
    handleGDIMPoff(localStorage.getItem('GDIMPoff') === 'true')
  }, []);  

  const handleGDIMPTheme = () => {
    handleGDIMPoff(!GDIMPoff);
    const bg = !GDIMPoff ? 'gdimp': 'normal';
    document.body.className = bg;
    localStorage.setItem( 'GDIMPoff', !GDIMPoff );
  }

  return (
    <div className="App">
      <SEO />
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
