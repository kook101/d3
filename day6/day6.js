//Day6
//Axis
//tutorial from https://scrimba.com/g/gd3js






var dataSet = [80,100,56,120,180,30,40,120,160];
console.log(dataSet);

var svgWidth = 500, svgHeight = 300;
// var barWidth = (svgWidth / dataSet.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var xScale=d3.scaleLinear()
    .domain([0, d3.max(dataSet)])
    .range([0,svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataSet)])
    .range([svgHeight, 0]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

var xAxisTranslate = svgHeight -20;

svg.append("g")
    .attr("transform", "translate(50, "+ xAxisTranslate +")")
    .call(x_axis);





// var barChart = svg.selectAll("rect")
//     .data(dataSet)
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//         return svgHeight - yScale(d);
//     })
//     .attr("height", function(d) {
//         return yScale(d);
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function (d, i){
//         var translate = [barWidth * i, 0];
//         return "translate("+ translate +")";
//     });

    console.log(barChart);


    // var text = svg.selectAll("text")
    //     .data(dataSet)
    //     .enter()
    //     .append("text")
    //     .text(function(d){
    //         return d;
    //     })
    //     .attr("y", function(d, i){
    //         return svgHeight -d -4;
    //     })
    //     .attr("x", function(d, i){
    //         return barWidth * i +13;
    //     })
    //     .attr("fill", "#000");
