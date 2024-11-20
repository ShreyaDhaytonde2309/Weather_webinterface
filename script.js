const apiKey = 'b6c916c14b19ebe34e7d4209e22f2754'; 

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (!location) {
        alert('Please enter a location');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('city').innerText = data.name;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    
    document.getElementById('weatherInfo').style.display = 'block';
}
