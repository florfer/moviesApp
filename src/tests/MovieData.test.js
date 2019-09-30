import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieData from './../components/MovieInfo/MovieData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MovieData movieId={456456} name="Test" premier="Test Premier" description="Test description" image="Test Image"/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});