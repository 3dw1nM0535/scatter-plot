var width = 700;
var height = 700;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
    .append("g")
    .attr("transform", "translate(100, 100)");


d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function(data) {
  console.log(data);
});