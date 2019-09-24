import React , {Component} from 'react';
import { Route } from 'react-router-dom';
import MoviesListContainer from './containers/MoviesListContainer';
import MovieTrailerContainer from './containers/MovieTrailerContainer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="appCont">
        <h1>MOVIES APP</h1>
        <Route exact path = "/" component={MoviesListContainer}/>
        <Route path = "/trailer/:id" component={MovieTrailerContainer}/>
      </div>
    );
  }
}

export default App;
