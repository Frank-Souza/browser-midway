const weather_api_key = 'cc2e8aafcdf145b2aee44949221705'
// const forecastEndpoint = `http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=73020&days=5`
window.onload = () => {
    attachedWeatherDataButton()
}
function attachedWeatherDataButton(){
const zip = document.getElementById("zip-code").value
const getWeatherDataButton = document.getElementById("get-weather-data")
getWeatherDataButton.addEventListener('click', () => 
// fetch(forecastEndpoint).then((response) => response.json())
fetch(`http://api.weatherapi.com/v1/forecast.json?key=${weather_api_key}&q=${zip}&days=5`).then((response) => response.json())
.then(data => addDataToHtml(data))
.catch(error => console.log('Error in fetch', error))
    )
}
    function addDataToHtml(data){
        const resultsName = document.getElementById('data-name')
        const resultsTemp = document.getElementById('data-temp')
        const resultsWind = document.getElementById('data-wind')
        const resultsCloud = document.getElementById('data-cloud')
        const resultsRain = document.getElementById('data-rain')

        // Find data in object using this
        // resultsName.innerText = JSON.stringify(data, null, 2)

        // Use below in actual code
        resultsName.innerText = `City: ${data.location.name}`
        resultsTemp.innerText = `Temperature: ${data.current.temp_f} F`
        resultsWind.innerText = `Wind speed: ${data.current.wind_mph} mph`
        resultsCloud.innerText = `Sky conditions: ${data.current.condition.text}`
        resultsRain.innerText = `Precipitation: ${data.current.precip_in} in`
    }
    // function getZipCode(){
    //     var zip = document.getElementById("zip-code").value
    //     console.log(zip)
    //     return zip
    // }


