import urlByType from './../services/urlByType';

export const getMoviesByType = (type) => {
    return new Promise((resolve, reject) => {
        fetch(urlByType(type))
        .then(response => {
            return response.json();
        })
        .then(responseBody => {
            resolve(responseBody.results);
        })
        .catch(function(error) {
            console.log('Error fetching movies:' + error.message);
            reject(error)
        });
    })
};