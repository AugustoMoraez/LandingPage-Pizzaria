import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import { ContextProvider } from './hooks/contexts/contextToggles';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   
    <ContextProvider>


      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>


    </ContextProvider>


  </React.StrictMode>,
)
