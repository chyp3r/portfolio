import reportWebVitals from './reportWebVitals';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
  import { BrowserRouter, HashRouter} from 'react-router-dom';
import ScrollToTop from './comp/ScrollStart';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
    <ScrollToTop></ScrollToTop>
      <App />
    </HashRouter>
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
