const apiKey = '5cd77ced83a1d3985be61c334f4adebc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    console.log("Location", location)

    if (location) {
        fetchWeather(location);
    }
});

let fetchWeather = async (location) => {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

     let response = await fetch(url);
     let jsonResponse = await response.json();
     console.log(jsonResponse);

        
    locationElement.textContent = jsonResponse.name;
    temperatureElement.textContent = `${jsonResponse.main.temp}°C`;
    descriptionElement.textContent = jsonResponse.weather[0].description;


     }
