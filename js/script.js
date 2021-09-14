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

}
