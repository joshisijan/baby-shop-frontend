import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import { persistor } from './store'
import './index.css';
import App from './App/App';
import SimpleReactLightbox from 'simple-react-lightbox'
import ScrollMemory from 'react-router-scroll-memory';
import Helmet from 'react-helmet'
import appDetail from './App/constants/appDetail';


ReactDOM.render(
  <Router>
    <Helmet> 
      <title>{appDetail.appName}</title>
      <meta 
        name="description"
        content={appDetail.appDescription}
      />
      <meta 
        name="keywords"
        content={appDetail.keywords}
      />
    </Helmet>
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


