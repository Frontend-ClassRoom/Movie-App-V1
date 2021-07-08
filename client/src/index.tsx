import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from 'assets/styles/theme';
import { createStore } from 'redux';
import rootReducer from 'store/reducer/rootReducer';

// const store = configureStore();
const store = createStore(rootReducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
