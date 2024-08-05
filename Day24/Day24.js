// Day 24: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197468

// require('dotenv').config();
// const API_KEY = process.env.API_KEY
import { API_KEY } from "./APIKEY.js"

const searchForm = document.querySelector("[data-searchForm]");
const searchInput = document.querySelector("[data-searchInput]");
// user Weather Info- fetched classes
const cityName = document.querySelector("[data-cityName]");
const countryIcon = document.querySelector("[data-countryIcon]");
const desc = document.querySelector("[data-weatherDesc]");
const weatherIcon = document.querySelector("[data-weatherIcon]");
const temp = document.querySelector("[data-temp]");
const windSpeed = document.querySelector("[data-speed]");
const humidity = document.querySelector("[data-humidity]");
const cloudiness = document.querySelector("[data-cloudiness]");

searchForm.addEventListener('submit', (event) => {

    event.preventDefault();
    let cityName = searchInput.value;
    if (cityName === "") return;
    fetchSearchInfo(cityName);
    searchInput.value = "";
    cityName = "";
});

//Searched City Weather Info
async function fetchSearchInfo(city) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            // If the response status is not OK (e.g., 404 Not Found, 500 Internal Server Error),
            // handle the error accordingly. 
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        renderWeatherData(data);
    }
    catch (err) {
        console.error("fetchSearchInfo: " + err.message);
    }
}

//using the accurired data from API call
function renderWeatherData(data) {
    // console.log("Weather Info", data);
    cityName.textContent = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.textContent = data?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`
    temp.innerText = `${data?.main?.temp.toFixed(2)} °C`;
    windSpeed.innerText = `${data?.wind?.speed.toFixed(2)} m/s`;
    humidity.innerText = `${data?.main?.humidity}%`;
    cloudiness.innerText = data?.clouds?.all + "%";

}