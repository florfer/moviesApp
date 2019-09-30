import React from 'react';
import ReactDOM from 'react-dom';
import Trailer from './../components/MovieTrailer/Trailer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Trailer trailer = "Test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});