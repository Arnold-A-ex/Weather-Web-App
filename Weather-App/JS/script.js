let search = document.getElementById("search");
let searchBtn = document.getElementById("search-btn");

let name = document.getElementById("name");
let flagImg = document.getElementById("flag");

let tempImg = document.getElementById("icon");
let temperature = document.getElementById("temperature");

let description = document.getElementById("description");

let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

let form = document.querySelector("form");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (search != ""){
        searchWeather();
    }
})


//function to fetch data and update UI
let id = "06be10c0a95a3aecbc8cd247a49e5b41";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id;
const searchWeather = () => {
    fetch(url + "&q=" + search.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data)
        if (data.cod == 200){
            name.innerText = data.name;
            flagImg.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            tempImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            temperature.innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
        } else{
            form.classList.add("animate__animated", "animate__shake", "error");
            setTimeout(() => {
                form.classList.remove("animate__animated", "animate__shake", "error");
            }, 1000);
        };


        search.value = "";
    });
};


//setting default values
const dflt = () => {
    search.value = "Aba";
    searchWeather();
};
dflt();