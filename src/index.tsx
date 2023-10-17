import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './core/reportWebVitals';
import App from './core/App';
import { theme } from './core/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './core/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import store from './core/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} >
        <GlobalStyles />
        <ReactQueryDevtools />
        <App />
      </ThemeProvider >
    </QueryClientProvider>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
