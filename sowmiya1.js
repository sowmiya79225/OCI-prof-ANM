const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert("City not found!");
                return;
            }

            const cityName = data.name;
            const description = data.weather[0].description;
            const temperature = `${data.main.temp}°C`;
            const humidity = `${data.main.humidity}%`;
            const windSpeed = `${data.wind.speed} m/s`;

            // Update the UI with the fetched data
            document.getElementById('city-name').textContent = cityName;
            document.getElementById('description').textContent = description;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed}`;

            document.getElementById('weather-info').style.display = 'block';
        })
        .catch(error => {
            console.error("Error fetching weather data: ", error);
            alert("Failed to get weather data. Please try again later.");
        });
}
