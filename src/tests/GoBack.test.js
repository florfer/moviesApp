import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GoBack from './../components/MovieTrailer/GoBack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><GoBack /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});