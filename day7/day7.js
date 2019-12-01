//Day7
//Creating SVG elements
//tutorial from https://scrimba.com/g/gd3js


var svgWidth = 600, svgHeight = 500;
var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");

//draw a line
//Need four cordinates -> start(x1, y1), end(x2, y2)     
var line = svg.append("line")
    .attr("x1", 100)
    .attr("y1", 50)
    .attr("x2", 500)
    .attr("y2", 50)
    .attr("stroke", "red");

//draw a rectangle
//Need a cordinate -> start(x,y)
//Need width and height
    var rect = svg.append("rect")
        .attr("x", 100)
        .attr("y", 100)
        .attr("width", 200)
        .attr("height", 100)
        .attr("fill", "#123456")

//draw a circle
//Need a cordinate -> Center of the circle -> start(cx,cy)
//Need radius
    var rect = svg.append("circle")
    .attr("cx", 150)
    .attr("cy", 300)
    .attr("r", 50)
    .attr("fill", "#123654")

