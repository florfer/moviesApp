import React , {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MoviesListContainer from './containers/MoviesListContainer';
import MovieTrailerContainer from './containers/MovieTrailerContainer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="appCont">
        <h1>MOVIES APP</h1>
        <BrowserRouter>
          <Route exact path = "/" component={MoviesListContainer}/>
          <Route path = "/trailer/:id" component={MovieTrailerContainer}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
