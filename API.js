const _KEY = '86f2453def545800e5f2ecfd07c1ac61';
let lon = -74.098198;
let lat = 40.30275;
let collectedData = [];

const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${_KEY}&units=imperial`;

fetch(API)
	.then((res) => res.json())
	.then((data) => {
		let displayData = '';
		let hour = 0;
		data;
		data?.list.map((values) => {
			collectedData.push([values.dt_txt.substring(0, 20), [values.main.temp_min, values.main.temp_max]]);
			// data has to be in this format
			// [
			// 	['1/1/2020', [15, 30]],
			// 	['2/1/2020', [18, 35]],
			// 	['3/1/2020', [27, 47]],
			// 	['4/1/2020', [37, 60]],
			// 	['5/1/2020', [46, 71]],
			// 	['6/1/2020', [56, 80]],
			// 	['7/1/2020', [61, 83]],
			// 	['8/1/2020', [60, 81]],
			// 	['9/1/2020', [51, 75]],
			// 	['10/1/2020', [40, 63]],
			// 	['11/1/2020', [30, 48]],
			// 	['12/1/2020', [19, 34]],
			// ];
			hour += 3;
			displayData += `<tr>
            	<td style="border: 1px solid black">${hour}</td>
                <td style="border: 1px solid black">${values.dt_txt.substring(0, 16)}</td>
                <td style="border: 1px solid black">${values.main.humidity}%</td>
                <td style="border: 1px solid black">${values.main.feels_like} F</td>
                <td style="border: 1px solid black">${values.main.temp_max} F</td>
                <td style="border: 1px solid black">${values.main.temp_min} F</td>
                <td style="border: 1px solid black">${values.wind.speed} MPH</td>
            </tr>`;
		});
		document.getElementById('table_body').innerHTML = displayData;
	});
