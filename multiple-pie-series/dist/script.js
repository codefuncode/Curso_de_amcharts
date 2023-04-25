/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    radius: am5.percent(90),
    innerRadius: am5.percent(50)
  })
);

// Create series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country"
  })
);

series.data.setAll([{
  country: "France",
  sales: 100000
}, {
  country: "Spain",
  sales: 160000
}, {
  country: "United Kingdom",
  sales: 80000
}]);

// Configuring slices
series.slices.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 2
})

// Disabling labels and ticks
series.labels.template.set("visible", false);
series.ticks.template.set("visible", false);

var series2 = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country"
  })
);

series2.data.setAll([{
  country: "France",
  sales: 60000
}, {
  country: "Spain",
  sales: 60000
}, {
  country: "United Kingdom",
  sales: 120000
}]);

// Configuring slices
series2.slices.template.setAll({
  stroke: am5.color(0xffffff),
  strokeWidth: 2
})

// Disabling labels and ticks
series2.labels.template.set("visible", false);
series2.ticks.template.set("visible", false);