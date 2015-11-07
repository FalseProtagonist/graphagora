var stuff = {className:"", children:[
    {className:"TVI",  packageName:'aa', value:2000},
    {className:"SIC",  packageName:'aa', value:1520},
    {className:"RTP1", packageName:'bb', value: 800},
    {className:"RTP2", packageName:'bb', value: 150}
]};

var r = 400,
    format = d3.format(",d"),
    fill = d3.scale.category10();

var bubble = d3.layout.pack()
    .sort(null)
    .size([r, r]);
 
var chart = d3.select("#graphag").append("svg:svg")
    .attr("width", r)
    .attr("height", r)
    .attr("class", "bubble");

var node = chart.selectAll("g.node")
    .data(bubble.nodes(stuff))
    .enter().append("svg:g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
 
function doStuff()
{
console.log("did stuff");
node.append("svg:title")
    .text(function(d) { return d.className + ": " + format(d.value); });
 
node.append("svg:circle")
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return fill(d.packageName); });
 
node.append("svg:text")
    .attr("text-anchor", "middle")
    .attr("dy", ".3em")
    .text(function(d) { return d.className.substring(0, d.r/3); });
}
