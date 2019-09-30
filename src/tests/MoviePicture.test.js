import React from 'react';
import ReactDOM from 'react-dom';
import MoviePicture from './../components/MovieInfo/MoviePicture';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoviePicture  image="Test Image" name="Test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});