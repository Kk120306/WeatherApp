import './styles.css';
import { getData } from './modules/api.js';
import { displayCurrentWeather } from './modules/dom.js';


const searchButton = document.getElementById("search-btn");
const searchLocation = document.getElementById("site-search");


function collectWeather(location = "vancouver") {
    getData(location).then((data) => {
        if (data && data.days) {
            displayCurrentWeather(data.resolvedAddress, data.days[0]);
        } else {
            alert("Weather data not available");
        }
    });
}


searchButton.addEventListener("click", () => {
    const location = searchLocation.value.trim(); 
    if (location) {
        collectWeather(location); 
    } else {
        console.log("Please enter a valid location");
    }
});

collectWeather();
