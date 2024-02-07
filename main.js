const input = document.querySelector('input');
const form = document.querySelector('form');
const h1 = document.querySelector('h1'); 
const h2 = document.querySelector('h2'); 
const img = document.querySelector('img');

const p1 = document.querySelector('.humidity');
const p2 = document.querySelector('.wind');
// const p = document.querySelector('p');

const fetchWeather = async (e) =>{

    e.preventDefault();

    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key= 7d8144501b83429dad2130753232812&q=${input.value}&aqi=yes`);
    const convert = await data.json();
    h1.innerText = convert.current.temp_c + " " + "°C";
    h2.innerText = convert.location.name +" "+","+" "+convert.location.region;
    img.setAttribute('src',convert.current.condition.icon);

    p1.innerText = convert.current.humidity +" "+"%" +" "+"\n Humidity";
    p2.innerText = convert.current.wind_kph +" "+ "km/h \n Wind Speed" ;
    // p.innerText = convert.current.condition.text;

    // console.log(convert);

}
form.addEventListener('click',fetchWeather);