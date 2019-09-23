import React from 'react';
import MovieInfo from '../MovieInfo';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
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
                draggable={false}
                showDots={["desktop"]}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className ="carousel"
            >
            {strToComponents(movies)}
        </Carousel>
    </div>
    );
};

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default MoviesList;