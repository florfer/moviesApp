import React from 'react';
import MovieInfo from '../MovieInfo';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import CircularProgress from '@material-ui/core/CircularProgress';
import "react-multi-carousel/lib/styles.css";
import './styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
};

const MoviesList = ({title, movies}) => {
    if (movies.length === 0) {
        return (
            <CircularProgress sie={50}/> 
        );
    }
    const strToComponents = movies =>(
        movies.map( movie =>
            (
                <MovieInfo
                    key={movie.id}
                    movieId={movie.id}
                    name={movie.title}
                    premier={movie.release_date}
                    description={movie.overview}
                    image={movie.poster_path}
                ></MovieInfo>
            ))
    );
    
    return(
        <div className="moviesListCont">
            <h2 className="moviesListTitle">{title}</h2>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className ="carousel"
                beforeChange={function(next,_ref)
                    {
                        console.log("_ref", _ref);
                        return;
                    }}
            >
            {strToComponents(movies)}
        </Carousel>
    </div>
    );
};

MoviesList.propTypes = {
    title: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
};

export default MoviesList;