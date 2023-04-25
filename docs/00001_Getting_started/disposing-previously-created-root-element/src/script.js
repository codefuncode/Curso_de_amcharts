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

function maybeDisposeRoot(divId) {
  am5.array.each(am5.registry.rootElements, function(root) {
    if (root.dom.id == divId) {
      root.dispose();
    }
  });
}

function createChart(divId) {
  
  // Dispose previously created Root element
  maybeDisposeRoot(divId);
  
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new(divId);

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  var data = [
    { date: new Date(2012, 1, 1).getTime(), value: 8 },
    { date: new Date(2012, 1, 2).getTime(), value: 10 },
    { date: new Date(2012, 1, 3).getTime(), value: 12 },
    { date: new Date(2012, 1, 4).getTime(), value: 14 },
    { date: new Date(2012, 1, 5).getTime(), value: 11 },
    { date: new Date(2012, 1, 6).getTime(), value: 6 },
    { date: new Date(2012, 1, 7).getTime(), value: 7 },
    { date: new Date(2012, 1, 8).getTime(), value: 9 },
    { date: new Date(2012, 1, 9).getTime(), value: 13 },
    { date: new Date(2012, 1, 10).getTime(), value: 15 },
    { date: new Date(2012, 1, 11).getTime(), value: 19 },
    { date: new Date(2012, 1, 12).getTime(), value: 21 },
    { date: new Date(2012, 1, 13).getTime(), value: 22 },
    { date: new Date(2012, 1, 14).getTime(), value: 20 },
    { date: new Date(2012, 1, 15).getTime(), value: 18 },
    { date: new Date(2012, 1, 16).getTime(), value: 14 },
    { date: new Date(2012, 1, 17).getTime(), value: 16 },
    { date: new Date(2012, 1, 18).getTime(), value: 18 },
    { date: new Date(2012, 1, 19).getTime(), value: 17 },
    { date: new Date(2012, 1, 20).getTime(), value: 15 },
    { date: new Date(2012, 1, 21).getTime(), value: 12 },
    { date: new Date(2012, 1, 22).getTime(), value: 10 },
    { date: new Date(2012, 1, 23).getTime(), value: 8 }
  ];

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX"
    })
  );

  var easing = am5.ease.linear;

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      maxDeviation: 0.1,
      groupData: false,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 50
      }),
      tooltip: am5.Tooltip.new(root, {})
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0.1,
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.LineSeries.new(root, {
      minBulletDistance: 10,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{valueY}"
      })
    })
  );

  series.data.setAll(data);

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 5,
        fill: series.get("fill"),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2
      })
    });
  });

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis
  }));
  cursor.lineY.set("visible", false);

  // add scrollbar
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000, 100);
  chart.appear(1000, 100);
}

createChart("chartdiv");