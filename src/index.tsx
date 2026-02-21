import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { favoriteData } from './mocks/favorite-data/favorite-data';
import { Provider } from 'react-redux';
import { store } from './store';
import { ErrorMessage } from './components/error-message/error-message';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        favoriteData={favoriteData}
      />
    </Provider>
  </React.StrictMode>
);
