import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './core/reportWebVitals';
import App from './core/App';
import { theme } from './core/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles';
import { Provider } from 'react-redux';
import store from './core/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    < ThemeProvider theme={theme} >
      <GlobalStyles />
      <App />
    </ThemeProvider >
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




