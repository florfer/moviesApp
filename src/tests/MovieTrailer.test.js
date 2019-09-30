import React from 'react';
import ReactDOM from 'react-dom';
import MovieTrailer from './../components/MovieTrailer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const trailer = [];
  ReactDOM.render(<MovieTrailer trailer = { trailer } />, div);
  ReactDOM.unmountComponentAtNode(div);
});