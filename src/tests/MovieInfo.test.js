import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieInfo from './../components/MovieInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MovieInfo movieId={456456} name="Test" premier="Test Premier" description="Test description" image="Test Image"/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});