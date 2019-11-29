//d3 draw a bar chart
//tutorial from https://scrimba.com/g/gd3js


var dataSet = [80,100, 56, 120, 180, 30, 40, 120, 160];
console.log(dataSet);
var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataSet.length);
console.log(barWidth);
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

    console.log(svg);

var barChart = svg.selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d;
    })
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i){
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });

    console.log(barChart);