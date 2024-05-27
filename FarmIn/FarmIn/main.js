const apiKey = '255a43fea715d85d44787f2334b17104'
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=philippines'
const feedbackCon = document.getElementById('feedback-cover')
const entirepage = document.querySelector('.main-container')
const homeContent = document.getElementById('home-container')
const typography = document.getElementById('typography')


function returnHome() {
    homeContent.style.cssText = 'display: flex'
    typography.style.cssText = 'display: none'
}
function showFeedback() {
    feedbackCon.style.cssText = 'display: block'
    entirepage.style.cssText = 'pointer-events: none'
    entirepage.classList.toggle('active')
}
function hideFeedback() {
    feedbackCon.style.cssText = 'display: none'
    entirepage.style.cssText = 'pointer-events: all'
    entirepage.classList.remove('active')
}
function showWebDetails() {
    homeContent.style.cssText = 'display: none'
    typography.style.cssText = 'display: flex'
}
function closeWeb() {
    window.close()
}

function pageToggle() {
    const menu = document.querySelector('#menu')
    const sidePanel = document.querySelector('.side-panel')
    const page = document.querySelector('.home-content')
    menu.onclick = function () {
        sidePanel.classList.toggle('active')
        page.classList.toggle('active')
    }
}
function dayStatus() {
    // Weather
    async function getWeather() {
        try {
            const response = await fetch(apiURL + `&appid=${apiKey}`)
            var data = await response.json()

            const icon = document.querySelector('.weather-icon')
            const temp = document.querySelector('.weather-temp')
            const city = document.querySelector('.city')
            const humidity = document.querySelector('.humidity')
            const wind = document.querySelector('.windspeed')
            const w_status = document.querySelector('.weather-status')

            temp.innerHTML = `${Math.round(data.main.temp)}°C`
            city.innerHTML = data.name
            humidity.innerHTML = data.main.humidity + '%'
            wind.innerHTML = data.wind.speed + ' km/h'
            w_status.innerHTML = data.weather[0].main

            switch (data.weather[0].main) {
                case 'Clouds':
                    icon.src = 'weatherImg/clouds.png'
                    break
                case 'Clear':
                    icon.src = 'weatherImg/clear.png'
                    break
                case 'Rain':
                    icon.src = 'weatherImg/rain.png'
                    break
                case 'Drizzle':
                    icon.src = 'weatherImg/drizzle.png'
                    break
                case 'Mist':
                    icon.src = 'weatherImg/mist.png'
                    break
                default:
                    icon.src = 'weatherImg/clouds.png'
            }
        } catch(error) {
            console.log('Fetch error: ' + error)
            alert('Unable to retrieve weather data. Please try again later.');
        }
    }
    function getDateTime() {
        // Date and Time
        function getTime() {
            const hours = document.getElementById('hrs')
            const minutes = document.getElementById('min')
            const seconds = document.getElementById('sec')

            setInterval(() => {
                const time = new Date()
                // Time
                const hour = time.getHours()
                const min = time.getMinutes()
                const sec = time.getSeconds()

                hours.innerHTML = hour
                minutes.innerHTML = min
                seconds.innerHTML = sec
            }, 1000)
        }
        function getDate() {
            const date = new Date()
            // Date
            const month = document.getElementById('month')
            const day = document.getElementById('day')
            const year = document.getElementById('year')

            year.innerHTML = date.getFullYear()
            month.innerHTML = date.toLocaleString('default', { month: 'long' })
            day.innerHTML = date.getDate()
            console.log(date);
        }
        getTime()
        getDate()
    }
    document.addEventListener('DOMContentLoaded', (event) => {
        getDateTime()
        getWeather();
    });
}
dayStatus()
pageToggle()