// app.js
const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) return alert('Please enter a city name.');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found');
            return;
        }

        // Display weather info
        document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        console.error(error);
        alert('Error fetching weather data.');
    }
}
