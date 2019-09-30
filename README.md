# MoviesApp

This App list movies and allows users to watch the trailer for each
movie.

## Installation

Download or clon this proyect and install with this command:

```bash
yarn install
```

To start using the application use this command: 

```bash
yarn start
```

The apllication will be available on localhost:3000 

## Description
The application was created using [Create React App](https://create-react-app.dev/docs/getting-started)

### Containers and Components 
The application is composed of components and containers. 
The containers are class components while the components are functional components. 

### Redux
The application use [Redux](https://react-redux.js.org/) as state manager 
Redux lets the React components read data from the Redux store (which represents the state of the application), and dispatch actions to the store to update data (handled by reducers).

### React Router
The application is a single page application an uses [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) to handle internal app routes

### Integration with API
The application integrates with the API [Themoviedb](https://developers.themoviedb.org/3/getting-started/introduction)
This API expose services to list all the movies clasified as now playing, popular, top rated and upcoming as well as movies trailers and images. 

### Tests
The test suite/cases were created using [Jest](https://jestjs.io/docs/en/getting-started.html)
To run the tests use the following command

```bash
npm test
```