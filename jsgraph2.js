var chart = JSC.chart('chartDiv2', {
	debug: true,
	type: 'Spline',
	title_label_text: 'Hourly Forecast',
	legend_visible: false,
	defaultPoint: {
		tooltip: 'Feels Like: <b>%yValue°F</b> ',
		marker: { size: 6 },
	},
	yAxis: [
		{
			// Left side YAxis F
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
					line_width: 2,
					color: ['#fcc348', 0.5],
				},
			],
		},
		{
			//Right side YAxis F converted to C
			scale_syncWith: 'mainY',
			orientation: 'opposite',
			formatString: 'n2',
			label_text: '(°C) Celcius',
			defaultTick_label: { text: '{(%Value-32)*5/9:n1}°C' },
		},
	],
	xAxis: {
		crosshair_enabled: true,
		formatString: 'g',
		scale: { type: 'time', interval: { unit: 'day' } },
	},
	series: [
		{
			points: collectedData2,
		},
	],
});
