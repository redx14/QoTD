const _KEY = '15ae29c6c05c42a8a16152157230606';
let zipcode = '07726';
let interval = 7; // number of days
let collectedData = [];
let loc = '';

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

const API = `https://api.weatherapi.com/v1/forecast.json?key=${_KEY}&q=${zipcode}&days=${interval}`;

fetch(API)
	.then((res) => res.json())
	.then((data) => {
		loc = data.location.name + ', ' + data.location.region;
		let displayData = '';
		console.log(data.forecast.forecastday);
		data?.forecast?.forecastday?.map((values) => {
			console.log(values);
			collectedData.push([values.date, [values.day.mintemp_f, values.day.maxtemp_f]]);
			displayData += `<tr>
		        <td style="border: 1px solid black">${values.date}</td>
		        <td style="border: 1px solid black">${values.day.avghumidity}%</td>
		        <td style="border: 1px solid black">${values.day.avgtemp_f} F</td>
		        <td style="border: 1px solid black">${values.day.maxtemp_f} F</td>
		        <td style="border: 1px solid black">${values.day.mintemp_f} F</td>
		        <td style="border: 1px solid black">${values.day.maxwind_mph} MPH</td>
					<td style="border: 1px solid black">${values.day.uv}</td>
		    </tr>`;
		});
		document.getElementById('table_body').innerHTML = displayData;
	});
