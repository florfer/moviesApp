import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './../store';
import MovieTrailerContainer from './../containers/MovieTrailerContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
      params: {
          id: 456456,
      }
  };
  ReactDOM.render(<Provider store={store}><MovieTrailerContainer match={ match } /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});