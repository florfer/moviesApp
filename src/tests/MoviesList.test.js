import React from 'react';
import ReactDOM from 'react-dom';
import MoviesList from './../components/MoviesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const movies =[{
    id: 456456,
    title: "Test",
    release_date: "Test Date",
    overview: "Test Overview",
    poster_path: "Test Poster",
  }];
  ReactDOM.render(<MoviesList title= "Now Playing"  movies={ movies }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});