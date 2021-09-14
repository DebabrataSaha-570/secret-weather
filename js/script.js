// https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=28c586074beaab31dbe95c184a5e7ed7

const loadWeatherData = () => {
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value;
    inputField.value = '';
    console.log(inputValue)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=28c586074beaab31dbe95c184a5e7ed7`

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeatherInfo(data))
}

const displayWeatherInfo = (city) => {
    console.log(city)
    const cityName = document.getElementById('city-name');
    cityName.innerText = city.name

    const cityTemperature = document.getElementById('city-temperature')
    const kelvin = city.main.temp;
    const celcius = kelvin - 273.15;
    cityTemperature.innerText = celcius.toFixed(2);

    const daySituation = document.getElementById('day-situation')
    daySituation.innerText = city.weather[0].main;

    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/11d@2x.png')

    if (city.weather[0].icon == '11d' || city.weather[0].icon == '11n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/11d@2x.png')
    }
    else if (city.weather[0].icon == '09d' || city.weather[0].icon == '09n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/09d@2x.png')
    }
    else if (city.weather[0].icon == '10d' || city.weather[0].icon == '10n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/10d@2x.png')
    }
    else if (city.weather[0].icon == '13d' || city.weather[0].icon == '13n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/13d@2x.png')
    }
    else if (city.weather[0].icon == '50d' || city.weather[0].icon == '50n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/50d@2x.png')
    }
    else if (city.weather[0].icon == '01d' || city.weather[0].icon == '01n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/01d@2x.png')
    }
    else if (city.weather[0].icon == '02d' || city.weather[0].icon == '02n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/02d@2x.png')
    }
    else if (city.weather[0].icon == '03d' || city.weather[0].icon == '03n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/03d@2x.png')
    }
    else if (city.weather[0].icon == '04d' || city.weather[0].icon == '04n') {
        weatherIcon.setAttribute('src', 'https://openweathermap.org/img/wn/04d@2x.png')
    }

}
