import React , {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import MovieTrailer from './components/MovieTrailer';
import './App.css';
import MoviesListContainer from './containers/MoviesListContainer';

class App extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h2' color='inherit'>
                Movies App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <MoviesListContainer />
          </Col>
          <Col xs={12} md={6} hidden={true}>
            <Paper elevation ={4}>
              <div className="details">
                <MovieTrailer></MovieTrailer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
