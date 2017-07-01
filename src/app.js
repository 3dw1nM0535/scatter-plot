var width = 700;
var height = 700;

var svg = d3.select(".container").append("svg")
  .attr("width", width)
  .attr("height", height)

var toolTip = d3.select(".container").append("div").attr("class", "toolTip");

d3.json("/data.json", (d) => {

});