// JSC.Chart looks for variable named data which is an []
// var data = [collectedData];
console.log([collectedData]);
var data = [['1111-11-11 33:11:11:111', [1, 3]]];

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
var chart = JSC.chart('chartDiv', {
	debug: true,
	type: 'area spline',
	palette: ['crimson', '#03bbfb'],
	legend_visible: false,
	title: {
		label: {
			text: 'lon: ' + `${lon}` + ' lat: ' + `${lat}` + ' Temperatures', //From the data array it can extract data and apply functions such as average/range/max/min
			style_fontWeight: 'normal',
		},
	},
	defaultAxis: { defaultTick_label_style_fontSize: '14px' },
	yAxis: [
		{
			id: 'mainY',
			label_text: '(°F) Fahrenheit',
			defaultTick: { label: { text: '%value°F' } },
			markers: [
				{
					value: [0, 32],
					label: {
						text: '<icon name=weather/snowflake size=15 verticalAlign=center margin_right=4> Freezing',
						style_fontSize: 14,
						align: 'center',
					},
					color: ['#65affb', 0.5],
				},
				{
					value: 70,
					label_text: '<icon name=weather/sun size=18 verticalAlign=center margin_right=4> Perfect (70°F)',
					label_style_fontSize: 14,
					line_width: 3,
					color: ['#fcc348', 0.5],
				},
			],
		},
		{
			scale_syncWith: 'mainY',
			orientation: 'opposite',
			formatString: 'n2',
			label_text: '(°C) Celcius',
			defaultTick_label: { text: '{(%Value-32)*5/9:n1}°C' }, // converts F into C
		},
	],
	xAxis: {
		// bottom of graph shows time interval
		crosshair_enabled: true,
		formatString: 'HH',
		scale: { type: 'time', interval: { unit: 'hour' } },
	},
	defaultSeries_shape_opacity: 0.7,
	defaultPoint: {
		tooltip: 'High: <b>%yValue°F</b>  ({(%yValue-32)*5/9:n1}°C)<br/>Low: <b>%yStart°F</b>  ({(%yStart-32)*5/9:n1}°C)',
		marker: { size: 6, color: 'darken' },
	},
	toolbar_visible: false,
	series: [{ name: 'Average Range', points: data }],
});
