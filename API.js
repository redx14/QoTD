const _KEY = '86f2453def545800e5f2ecfd07c1ac61';
let lon = -74.098198;
let lat = 40.30275;
const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_KEY}&units=imperial`;

fetch(API)
	.then((res) => res.json())
	// .then(data => console.log(data.list))
	.then((data) => {
		let displayLocation = '';
		let displayData = '';
		let hour = 0;
		data;
		data?.list.map((values) => {
			console.log(values);
			hour += 3;
			displayData += `<tr>
            	<td style="border: 1px solid black">${hour}</td>
                <td style="border: 1px solid black">${values.dt_txt.substring(0, 10)}</td>
                <td style="border: 1px solid black">${values.main.humidity}%</td>
                <td style="border: 1px solid black">${values.main.feels_like} F</td>
                <td style="border: 1px solid black">${values.main.temp_max} F</td>
                <td style="border: 1px solid black">${values.main.temp_min} F</td>
                <td style="border: 1px solid black">${values.wind.speed} MPH</td>
            </tr>`;
		});
		document.getElementById('table_body').innerHTML = displayData;
	});
