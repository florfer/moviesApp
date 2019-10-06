import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './../store';
import MovieTrailer from './../components/MovieTrailer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
    params: {
        id: 456456,
    }
  };
  /* const trailer = []; */
  ReactDOM.render(<Provider store={store}><MovieTrailer match={ match } /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});