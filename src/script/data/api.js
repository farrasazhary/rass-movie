const API_KEY = 'api_key=d69715dcf9e244904b1ec23232eac42e';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchUrl = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form')
const search = document.getElementById('search')

const showMovies = (data) => {
    main.innerHTML = '';

    data.forEach((movie) => {
        const { title, poster_path, vote_average } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-container');
        movieElement.innerHTML = `
            <div class="movie">
                <img src="${IMG_URL + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="green">${vote_average}</span>
                </div> 
            </div>
        `;

        main.appendChild(movieElement);
    });
};

const getMovies = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        showMovies(data.results);
    } catch (error) {
        console.error(error);
    }
};

getMovies(API_URL);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(`${searchUrl}&query=${searchTerm}`)
    } else {
        getMovies(API_URL)
    }

})



export default main;