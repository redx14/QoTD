// JSC.Chart looks for data in last line of code series: [{ points: (enter data name here) }]

var chart = JSC.chart('chartDiv', {
	debug: true,
	type: 'area spline',
	palette: ['crimson', '#03bbfb'],
	legend_visible: false,
	title: {
		//From the data array it can extract data and apply functions such as average/range/max/min
		label: {
			text: 'Weekly Forecast for: ' + `${loc}`,
			style_fontWeight: 'normal',
		},
	},
	defaultAxis: { defaultTick_label_style_fontSize: '14px' },
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
						text: '<icon name=weather/snowflake size=15 verticalAlign=center  margin_right=4> Freezing',
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
			//Right side YAxis F converted to C
			scale_syncWith: 'mainY',
			orientation: 'opposite',
			formatString: 'n2',
			label_text: '(°C) Celcius',
			defaultTick_label: { text: '{(%Value-32)*5/9:n1}°C' },
		},
	],
	xAxis: {
		//Time Interval does not except real numerical values only YYYY-MM-DD HH:mm:ss:sss
		crosshair_enabled: true,
		label_style_fontSize: 12,
		formatString: 'd',
		scale: { type: 'time', interval: { unit: 'day' } },
	},
	//ToolTip
	defaultSeries_shape_opacity: 0.2,
	defaultPoint: {
		tooltip: 'High: <b>%yValue°F</b>  ({(%yValue-32)*5/9:n1}°C)<br/>Low: <b>%yStart°F</b>  ({(%yStart-32)*5/9:n1}°C)',
		marker: { size: 6, color: 'darken' },
	},
	toolbar_visible: false,
	series: [{ points: collectedData }],
});
