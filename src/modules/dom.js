const topLeftContainer = document.querySelector('.top-left-container');
const bottomLeftContainer = document.querySelector('.bottom-left-container');

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