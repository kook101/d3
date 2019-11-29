////tutorial from https://scrimba.com/g/gd3js
//d3 array
//statistics, search, transformations, histograms, histogram threshholds
//d3 dsv
//declarative programming - 선언형 프로그래밍
//Tell d3 what you want

//imperative programming - 명령형 프로그램
//tell js how to do it

//Data biding - array of numbers

var dataSet = [ 1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataSet)
    .enter()
    .append('p')//append paragraph for each data element
    // .text('D3 Day2!');
    .text(function(d){return d;});