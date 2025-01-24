const topLeftContainer = document.querySelector('.top-left-container');
const bottomLeftContainer = document.querySelector('.bottom-left-container');
const cardContainer = document.querySelector('.card-container');

import sunIcon from '../asset/sun.png';
import cloudyIcon from '../asset/cloudy.png';
import rainIcon from '../asset/rain.png';

const weatherIcons = {
    Sunny: sunIcon,
    Cloudy: cloudyIcon,
    Rain: rainIcon,
};



function getWeatherIcon(condition) {
    if (condition.includes("Rain")) {
        return weatherIcons.Rain;
    } else if (condition.includes("cloudy") || condition.includes("Overcast")) {
        return weatherIcons.Cloudy;
    } else if (condition.includes("Sunny") || condition.includes("Clear")) {
        return weatherIcons.Sunny;
    } else {
        return "";
    }
}


export function displayCurrentWeather(resolvedAdress, weather){
    topLeftContainer.innerHTML = '';
    bottomLeftContainer.innerHTML = '';


    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-text');

    const conditionText = document.createElement('div');
    conditionText.classList.add('condition-text');
    conditionText.textContent = weather.conditions;

    const temperatureText = document.createElement('div');
    temperatureText.classList.add('temperature-text');
    temperatureText.textContent = `${weather.temp}°C`;

    const locationText = document.createElement('div');
    locationText.classList.add('location-text');
    locationText.textContent = resolvedAdress;


    const currentDate = new Date();

    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const year = currentDate.getFullYear();

    const dateHTML = `
            <br>${dayName}</br>
            <br>${monthName} ${year}</br>
        `;

    dateContainer.innerHTML = dateHTML;

    topLeftContainer.appendChild(dateContainer);
    topLeftContainer.appendChild(conditionText); 
    
    bottomLeftContainer.appendChild(temperatureText);
    bottomLeftContainer.appendChild(locationText);
}

export function displayWeeklyForecast(days){
    cardContainer.innerHTML = '';

    const week = days.slice(0,7);

    week.forEach((day) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const topCard = document.createElement('div');
        topCard.classList.add('top-card');

        const weatherIcon = document.createElement('img');
        weatherIcon.src = getWeatherIcon(day.conditions);
        weatherIcon.alt = day.conditions;
        weatherIcon.id = "card-weather";

        const temp = document.createElement('div');
        temp.classList.add('card-temp');
        temp.textContent = `${day.temp}°C`;

        topCard.appendChild(weatherIcon);
        topCard.appendChild(temp);

        const cardText = document.createElement('div');
        cardText.classList.add('card-text');

        const cardCondition = document.createElement('div');
        cardCondition.classList.add('card-conditions');
        cardCondition.textContent = day.conditions;

        const cardDate = document.createElement('div');
        cardDate.classList.add('card-date');
        cardDate.textContent = day.datetime;

        cardText.appendChild(cardCondition);
        cardText.appendChild(cardDate);

        card.appendChild(topCard);
        card.appendChild(cardText);
        
        cardContainer.appendChild(card);
    });
}