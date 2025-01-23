import './styles.css';
import { getData } from './modules/api.js';


function collectWeather(){
    let location = prompt("Enter a valid location to check the weather");
    getData(location).then((data) => {
        if (data && data.days){
            console.log(data.days[0]);

        } else{
            console.log("weather data not avaliable");
        }
    })
}

collectWeather();
