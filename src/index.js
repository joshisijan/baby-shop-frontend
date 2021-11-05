import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import { persistor } from './store'
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'
import ScrollMemory from 'react-router-scroll-memory';


ReactDOM.render(
  <Router>
    <ScrollMemory />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);


