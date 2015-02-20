// BulletChart - Vis to compare 3 dimensional data (ex. economic disparity, wealth, gdp)
// and see how well that grouping is represented in the dataset. 
angular.module("bullet", []).controller("bulletController", ['$scope',
	function($scope) {
		// Initial JSON data. Can be passed in through $scope variables, http links, or set up directly in a variable
		var JSONData = "{\"dbName\": \"x2\",\"Histogram\": {\"type\": \"HORIZONTAL_DELTA_HISTOGRAM\",\"data\": {\"type\": \"overlay-delta\",\"xAxis\": \"Number of Cases\",\"pop_p\": [0.04268759571209801, 0.016558192955589586, 0.017802450229709034, 0.06340926493108728, 0.028665773353751915, 0.029431470137825422, 0.06953483920367534, 0.03814127105666156, 0.0271343797856049, 0.025555130168453292, 0.06537136294027565, 0.05446018376722818, 0.031632848392036755, 0.039672664624808576, 0.036753445635528334, 0.027086523736600306, 0.022731623277182235, 0.03010145482388974, 0.011294027565084226, 0.05221094946401225, 0.04862174578866769, 0.025698698315467075, 0.03732771822358346, 0.04015122511485452, 0.03646630934150077, 0.032685681470137826, 0.048813169984686065],\"coll_p\": [0.01910828025477707, 0.006369426751592357, 0.006369426751592357, 0.21019108280254778, 0.012738853503184714, 0.025477707006369428, 0.21656050955414013, 0.044585987261146494, 0.03184713375796178, 0.012738853503184714, 0.012738853503184714, 0.0, 0.05732484076433121, 0.0, 0.044585987261146494, 0.025477707006369428, 0.012738853503184714, 0.03821656050955414, 0.0, 0.0, 0.01910828025477707, 0.01910828025477707, 0.025477707006369428, 0.07643312101910828, 0.03184713375796178, 0.025477707006369428, 0.025477707006369428],\"bars\": [{    \"rec\": 7,    \"act\": 3,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.14387411470969158,    \"color\": \"#006837\"}, {    \"rec\": 3,    \"act\": 1,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.31709809673919875,    \"color\": \"#006837\"}, {    \"rec\": 3,    \"act\": 1,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.27864997811705994,    \"color\": \"#006837\"}, {    \"rec\": 10,    \"act\": 33,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 4.451994328746878E-14,    \"color\": \"#006837\"}, {    \"rec\": 5,    \"act\": 2,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.2317134706233508,    \"color\": \"#006837\"}, {    \"rec\": 5,    \"act\": 4,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.7694325241205655,    \"color\": \"#fdcc8a\"}, {    \"rec\": 11,    \"act\": 34,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 4.403144515663371E-13,    \"color\": \"#006837\"}, {    \"rec\": 6,    \"act\": 7,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.9833378781574422,    \"color\": \"#2c7fb8\"}, {    \"rec\": 4,    \"act\": 5,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 0.0,        \"max\": 24.9596004486084,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.7162727926978996,    \"color\": \"#006837\"}, {    \"rec\": 4,    \"act\": 2,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.30884924295983807,    \"color\": \"#006837\"}, {    \"rec\": 10,    \"act\": 2,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.007629760842069455,    \"color\": \"#006837\"}, {    \"rec\": 9,    \"act\": 0,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.0026374339452071016,    \"color\": \"#006837\"}, {    \"rec\": 5,    \"act\": 9,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.06586742154151337,    \"color\": \"#006837\"}, {    \"rec\": 6,    \"act\": 0,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.010873211732447374,    \"color\": \"#006837\"}, {    \"rec\": 6,    \"act\": 7,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.9097252482600627,    \"color\": \"#41b6c4\"}, {    \"rec\": 4,    \"act\": 4,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.9011747950100324,    \"color\": \"#41b6c4\"}, {    \"rec\": 4,    \"act\": 2,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.4008712171375297,    \"color\": \"#006837\"}, {    \"rec\": 5,    \"act\": 6,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 24.9596004486084,        \"max\": 26.17799949645996,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.5517792304940372,    \"color\": \"#006837\"}, {    \"rec\": 2,    \"act\": 0,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.1805103611563692,    \"color\": \"#006837\"}, {    \"rec\": 8,    \"act\": 0,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.00327299365867717,    \"color\": \"#006837\"}, {    \"rec\": 8,    \"act\": 3,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.0,        \"max\": 0.23000000417232513,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.0855406778401232,    \"color\": \"#006837\"}, {    \"rec\": 4,    \"act\": 3,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.6017623077167578,    \"color\": \"#006837\"}, {    \"rec\": 6,    \"act\": 4,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.43346631082310927,    \"color\": \"#006837\"}, {    \"rec\": 6,    \"act\": 12,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 0.23000000417232513,        \"max\": 7.410000324249268,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.020572703860587405,    \"color\": \"#006837\"}, {    \"rec\": 6,    \"act\": 5,    \"condition\": [{        \"min\": 0.0,        \"max\": 1733.10595703125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.757496577239817,    \"color\": \"#fdcc8a\"}, {    \"rec\": 5,    \"act\": 4,    \"condition\": [{        \"min\": 1733.10595703125,        \"max\": 2392.26611328125,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.6115052065438225,    \"color\": \"#006837\"}, {    \"rec\": 8,    \"act\": 4,    \"condition\": [{        \"min\": 2392.26611328125,        \"max\": 8450.54296875,        \"v\": \"prec_p50wm\"    }, {        \"min\": 7.410000324249268,        \"max\": 100.0,        \"v\": \"pct_crop\"    }, {        \"min\": 26.17799949645996,        \"max\": 28.844200134277344,        \"v\": \"temp_p50\"    }],    \"p_p\": 0.17479612289029767,    \"color\": \"#006837\"}]        }    },    \"Statistics\": {        \"type\": \"JBF\",        \"data\": {}    },    \"Analysis\": {        \"type\": \"TEXT_DEDA\",        \"data\": {}    }}";

		var sortableBulletData = [];
		var referenceBulletData = [];


		var results = JSON.parse(JSONData);
		var maxValue = 0;

		/// Loops through the json data to process it for d3 
		for (i = 0; i < results.Histogram.data.bars.length; i++) {

			var barData = results.Histogram.data.bars[i];
			var sortableConditionsData = [];
			var referenceConditionsData = [];

			maxValue = Math.max(barData.rec, barData.act, maxValue);

			var titleText = "Sample: " + i + " ";
			var subtitleText = "";
			var tooltipStatisticsText = barData.p_p;


			for (var t = 0; t < barData.condition.length; t++) {
				var condition = [barData.condition[t].v, barData.condition[t].min, barData.condition[t].max];
				sortableConditionsData.push(condition);
				referenceConditionsData.push(condition);
			}


			var referenceData = {
				title: titleText,
				subtitle: subtitleText,
				ranges: [barData.rec],
				measures: [barData.rec],
				markers: [barData.rec],
				circles: [barData.act],
				circleColors: barData.color,
				tooltipText: tooltipStatisticsText,
				chartOrder: i,
				conditions: referenceConditionsData
			};

			var sortableData = {
				title: titleText,
				subtitle: subtitleText,
				ranges: [barData.rec],
				measures: [barData.rec],
				markers: [barData.rec],
				circles: [barData.act],
				circleColors: barData.color,
				tooltipText: tooltipStatisticsText,
				chartOrder: i,
				conditions: sortableConditionsData
			};

			sortableBulletData.push(sortableData);
			referenceBulletData.push(referenceData);
		}

		// Sets the proper maximum value for the x axis 
		for (i = 0; i < sortableBulletData.length; i++) {
			sortableBulletData[i].ranges.push(maxValue * 1.1);
			referenceBulletData[i].ranges.push(maxValue * 1.1);
		}

		// Sets the size of the visualization
		var margin = {
				top: 5,
				right: 40,
				bottom: 20,
				left: 120
			},
			width = 960 - margin.left - margin.right,
			height = 50 - margin.top - margin.bottom;

		var chart = d3.bullet()
			.width(width)
			.height(height);

		// Sets the intial attributes for the visualization 
		var svg = d3.select("body").selectAll("svg")
			.data(referenceBulletData)
			.enter().append("svg")
			.attr("class", "bullet")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			.call(chart);



		// Sets the distance of the title from the sample group from the data bar
		var title = svg.append("g")
			.style("text-anchor", "end")
			.attr("transform", "translate(-6," + height / 2 + ")");

		// Sets the function to grab the title for each group from the data
		title.append("text")
			.attr("class", "title")
			.text(function(d) {
				return d.title;
			});

		// Sets the function to grab the subtitle for each group from the data
		title.append("text")
			.attr("class", "subtitle")
			.attr("dy", "1em")
			.text(function(d) {
				return d.subtitle;
			});

		// Sorts the sample groups based on the drop down box 
		d3.selectAll("select").on("change", function() {
			switch (this.value) {
				case "conditions":
					sortableBulletData.sort(sortByConditions); // TODO automatic transition
					break;
				case "probability":
					sortableBulletData.sort(sortByProbabilityDisparity); // TODO automatic transition
					//arrayprint(sortableBulletData);
					break;
			}	

		// Gets all the data attributes 
		var s = svg.datum;
		svg.datum(sortChart).call(chart.duration(1000));

		// Sets the title for all of the groupings 
		d3.selectAll("text.title").text(function(d, i) {
			return sortableBulletData[i].title;
		});
		
		// Sets the subtitle for all of the groupings 
		d3.selectAll("text.subtitle").text(function(d, i) {
			return sortableBulletData[i].subtitle;
		});

		});

		function sortChart(d, i) {
			d.title = sortableBulletData[i].title;
			d.subtitle = sortableBulletData[i].subtitle;
			d.ranges = sortableBulletData[i].ranges;
			d.measures = sortableBulletData[i].measures;
			d.markers = sortableBulletData[i].markers;
			d.circles = sortableBulletData[i].circles;
			d.circleColors = sortableBulletData[i].circleColors;
			d.tooltipText = sortableBulletData[i].tooltipText;
			d.chartOrder = sortableBulletData[i].chartOrder;

			return d;
		}

		// Sorts the sample groups by the difference between the goal probability, and the 
		// actual probability 
		function sortByProbabilityDisparity(a, b) {
			return Math.abs(b.measures - b.circles) - Math.abs(a.measures - a.circles);;
		}

		// Sorts the group by some index/id 
		function sortByConditions(a, b) {
			return a.chartOrder - b.chartOrder;
		}

	}
]);

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// Debug 
function arrayprint(n) {
	for (t = 0; t < n.length; t++) {
		document.write(barPrint(n[t]));

	}
	document.write("<br>");
}

// Debug for d3 data
function barPrint(d) {
	return "Group: " + d.title + '<br>' + "Subtitle: " + d.subtitle + '<br>' + "Ranges: " + d.ranges + '<br>' + "Measures: " + d.measures + '<br>' + "Markers: " + d.markers + '<br>' + "Circles: " + d.circles + '<br>' + "Circle Colors: " + d.circleColors + '<br>' + " Tooltip Text: " + d.tooltipText + '<br>' + " Chart Order: " + d.chartOrder + '<br>' + '<br>';
}

//function formatNumber(n) {
//	if (isNumeric(n)) {
//		var expt = Math.floor((n.toFixed(0).length - 1) / 3) * 3;
//		var base = (n / Math.pow(10, expt)).toFixed(2),
//			unit = {
//				0: "",
//				3: "k",
//				6: "M",
//				9: "G"
//			}[expt];
//		return base + unit;
//	} else return n;
//}