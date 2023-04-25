// ///////////////////////////////////////////

// var root = am5.Root.new("chartdiv");

am5.ready(function() {
  var root = am5.Root.new("chartdiv");

  var chart = root.container.children.push(
    am5pie.PieChart.new(root, {})
  );

});