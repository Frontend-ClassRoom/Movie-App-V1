import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from 'assets/styles/theme';
import { createStore } from 'redux';
import rootReducer from 'store/reducer/rootReducer';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

const store = createStore(rootReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </ThemeProvider>,
  document.getElementById('root')
);
