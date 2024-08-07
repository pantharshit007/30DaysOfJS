// Day 25: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197474

import { API_KEY } from './APIKEY.js'

const searchForm = document.querySelector('.form');
const searchInput = document.getElementById('search-input');

let resultsContainer = document.getElementById('results-container');

const dialog = document.getElementById("movie-modal");
const title = document.getElementById('modal-title')
const poster = document.getElementById('modal-poster')
const plot = document.getElementById('modal-plot')
const director = document.getElementById('modal-director')
const actors = document.getElementById('modal-actors')
const closeButton = document.querySelector('.close-button');

searchForm.addEventListener('submit', (event) => {

    event.preventDefault();
    let movieName = searchInput.value;
    fetchData(movieName)
    searchInput.value = "";
    movieName = "";
});

function fetchData(movie = undefined, movieId = undefined) {
    const URL = `https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`;
    if (movie) {
        fetch(URL)
            .then((response) => response.json())
            .then(data => {
                if (data.Response === "True") {
                    displayMovies(data.Search);
                } else {
                    document.getElementById('results-container').innerHTML = `<p>${data.Error}</p>`;
                }
            })
    }

    if (movieId) {
        const URL = `https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`;
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    displayMovieDetails(data);
                } else {
                    console.error(data.Error);
                }
            })
            .catch(error => console.error('Error fetching movie details:', error));
    }
}

function displayMovies(data) {
    resultsContainer.innerHTML = ''

    data.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}" loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <p class="movie-year">${movie.Year}</p>
                <button class="more-info-button" data-id="${movie.imdbID}">More Info</button>
            </div>
        `;
        resultsContainer.appendChild(movieElement);
    });

    document.querySelectorAll('.more-info-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const movieId = e.target.getAttribute('data-id');
            dialog.showModal()
            fetchData(null, movieId)
        })
    })
}

function displayMovieDetails(movie) {
    title.textContent = movie.Title;
    poster.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
    plot.textContent = movie.Plot;
    director.textContent = movie.Director;
    actors.textContent = movie.Actors;

    dialog.style.display = 'block';

    closeButton.addEventListener('click', () => {
        dialog.close();
        dialog.style.display = 'none';
    })
}