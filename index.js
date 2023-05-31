const _KEY = '86f2453def545800e5f2ecfd07c1ac61'
let lon = -74.098198
let lat = 40.302750
const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_KEY}`

fetch(API)
    .then(res => res.json())
    // .then(data => console.log(data.list))
    .then((data) => {
        let displayData = "";
        data ? data.list.map((values) => {
            console.log(values)
            displayData+=
            `<tr>
                <td>${values.dt_txt.substring(0,10)}</td>
                <td>${values.main.humidity}%</td>
                <td>${values.main.feels_like} F</td>
                <td>${values.main.temp_max} F</td>
                <td>${values.main.temp_min} F</td>
                <td>${values.wind.speed} MPH</td>
            </tr>`;
        }) : "";
        document.getElementById("table_body").innerHTML=displayData;
    })
