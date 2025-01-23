export async function getData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=2TGLFQJGSFLHUB73JJKKE9VHW&contentType=json`;
    try {
        let response = await fetch(url);
        let weatherData = await response.json();
        if (weatherData && weatherData.days) {
            return weatherData;
        }
        throw new Error('No weather data found');
    } catch (err) {
        console.error('Error fetching weather data:', err);
        throw err; 
    }
}
