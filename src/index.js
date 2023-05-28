import React from 'react';
import './styles/settings/colors.css'
import './styles/fonts/fonts.css'
import './styles/settings/spacing.css'
import './styles/settings/size.css'
import './styles/generic/reset.css'
import './styles/elements/base.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';


const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
