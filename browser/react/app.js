'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import AlbumContainer from './containers/AlbumContainer';
import { Router, hashHistory, IndexRoute, Route } from 'react-router';


ReactDOM.render(
  <Provider store={store}>
    <Router history = {hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={AlbumsContainer} />
        <Route path="albums" component={AlbumsContainer} />
        <Route path="albums/:albumId" component={AlbumContainer} />
        <Route path="artists" component={ArtistsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
