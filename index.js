// Getting the current date
const dateBuilder = (d) => {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `Today: ${day} ${date} ${month} ${year}`
}
dateHTML = document.getElementById('date')
dateHTML.innerText = dateBuilder(new Date())

// Fetching the current weather
let city = 'Moscow'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f436e4b5d15102a31f8e0a37fb0fad3e`

let degrees = document.getElementById('degrees')
let cloudy = document.getElementById('cloudy')

const fetching = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            degrees.innerText = Math.round(data.main.temp) + ' °C'
            cloudy.innerText = data.weather['0'].main
        })
        .catch((err) => console.log(err))
}
fetching()

// Making the interface interactive and fetching each time the user changes the city
let spb = document.getElementById('spb')
let moscow = document.getElementById('moscow')
spb.style.background = 'rgba(84, 110, 122, 0.8)'
moscow.style.background = 'rgba(41, 67, 78, 0.8)'

// Moscow
moscow.addEventListener('mouseover', () => {
    moscow.style.background = 'rgba(129, 156, 169, 0.8)'
})
moscow.addEventListener('click', () => {
    spb.style.background = 'rgba(84, 110, 122, 0.8)'
    document.body.style.background =
        "url('./assets/moscow.jpg') no-repeat center fixed"
    document.body.style.backgroundSize = 'cover'
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=f436e4b5d15102a31f8e0a37fb0fad3e'
    )
        .then((res) => res.json())
        .then((data) => {
            degrees.innerText = Math.round(data.main.temp) + ' °C'
            cloudy.innerText = data.weather['0'].main
        })
        .catch((err) => console.log(err))
})
moscow.addEventListener('mouseout', () => {
    if (spb.style.background == 'rgba(84, 110, 122, 0.8)') {
        moscow.style.background = 'rgba(41, 67, 78, 0.8)'
    } else {
        moscow.style.background = 'rgba(84, 110, 122, 0.8)'
    }
})

// Saint Petersburg
spb.addEventListener('mouseover', () => {
    spb.style.background = 'rgba(129, 156, 169, 0.8)'
})
spb.addEventListener('click', () => {
    moscow.style.background = 'rgba(84, 110, 122, 0.8)'
    document.body.style.background =
        "url('./assets/spb.jpg') no-repeat center fixed"
    document.body.style.backgroundSize = 'cover'
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Saint+Petersburg&units=metric&appid=f436e4b5d15102a31f8e0a37fb0fad3e'
    )
        .then((res) => res.json())
        .then((data) => {
            degrees.innerText = Math.round(data.main.temp) + ' °C'
            cloudy.innerText = data.weather['0'].main
        })
        .catch((err) => console.log(err))
})
spb.addEventListener('mouseout', () => {
    if (moscow.style.background == 'rgba(84, 110, 122, 0.8)') {
        spb.style.background = 'rgba(41, 67, 78, 0.8)'
    } else {
        spb.style.background = 'rgba(84, 110, 122, 0.8)'
    }
})
