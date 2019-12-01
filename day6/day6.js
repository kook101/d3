//Day6
//Axes
//tutorial from https://scrimba.com/g/gd3js


var dataSet = [1,2,3,4,5];
console.log(dataSet);

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataSet.length);
console.log(barWidth);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    console.log(svg);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataSet)])
    .range([0, svgHeight]);

var barChart = svg.selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - yScale(d);
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i){
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });

    console.log(barChart);


    var text = svg.selectAll("text")
        .data(dataSet)
        .enter()
        .append("text")
        .text(function(d){
            return d;
        })
        .attr("y", function(d, i){
            return svgHeight -d -4;
        })
        .attr("x", function(d, i){
            return barWidth * i +13;
        })
        .attr("fill", "#000");
